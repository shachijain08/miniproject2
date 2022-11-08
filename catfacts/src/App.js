import './App.css';
import { useEffect, useState } from 'react';
import CatFact from './components/CatFacts';
import PageButtons from './components/PageButtons';

function App() {
  const [ numFacts, setNumFacts ] = useState(0)
  const [ catFact, setCatFact ] = useState({})
  const [ arr, setArr] = useState([]);
  const [ catFactArray, setCatFactArray ] = useState([])
  const [ pageI, setPageI ] = useState(1);

  useEffect(() => {
    var temp = catFactArray;
    temp.push(catFact);
    setCatFactArray(temp);
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      let f = {
        fact: data.fact,
        liked: false
      }
      setCatFact(f)});
  }, [numFacts])

  var min;
  var max;
  useEffect(() => {
    var temp = catFactArray;
    min = 2 + ((pageI - 1) * 10);
    max = 12 + ((pageI - 1) * 10);
    var output = temp.slice(min, max);
    output = output.reverse();
    setArr(output);
  }, [pageI, catFactArray, numFacts])

  useEffect(() => {
    if (numFacts > 1 && (numFacts - 1) % 10 == 0) {
      setPageI(pageI + 1);
    }
  }, [numFacts])
  return (
    <div>
      <button id="getFact" onClick={() => setNumFacts(numFacts + 1)}><h1>Click to Get Cat Fact</h1></button>
      <div id="history"><h2>HISTORY</h2></div>
      <div id = "facts">
      {arr.map((e) => {
                let k = arr.indexOf(e)
                return <CatFact data={e} key={k} catFactArray={catFactArray} setCatFactArray={setCatFactArray}></CatFact>;
            })}
      </div>
      <div>
      <PageButtons index={pageI} setIndex={setPageI} num={numFacts}></PageButtons>
      </div>
    </div>
  );
}
export default App;