function PageButtons(props) {

    const { index, setIndex, num} = props
    let left = num % 10;
    let part = (left > 0) ? 1 : 0;
    let max = Math.floor(num / 10) + part;
    let min = 1;
    return (
        <div className="buttons">
            <button className="b" onClick={() => setIndex((index - 1 >= min)? index - 1 : min)}><h1 >BACK</h1></button>
            <button className="b" onClick={() => setIndex((index + 1 <= max) ? index + 1 : max)}><h1>NEXT</h1></button>
        </div>
    )
}

export default PageButtons;