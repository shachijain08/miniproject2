export default function CatFact(props) {
    const { data, catFact, setArr } = props;
    function toggle() {
        let temp = [
            ...catFact
        ]
        let i = temp.indexOf(data)
        temp[i] = {
            fact: data.fact,
            liked: !data.liked
        }
        setArr(temp)
      }
    return (
            <div onClick={toggle} className="catFact"> 
                <p>{data.fact}</p>
            </div>
    )
}