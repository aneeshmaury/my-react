function EventHand(){
    function result(){
        alert("its work")
    }
    return <>
        <h4>Hi, please click me</h4>
        <button onClick={result}>Click me</button>
    </>
}
export default EventHand;