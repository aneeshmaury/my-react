import { useState } from "react";

function EventHand(){
     let [count,counting]=useState(0)
    function press(){
        counting(count+1)
    }
    return <>
        <button onClick={press}>
    This is {count}
</button>
<input type="text" placeholder="number" value={count}/>

    </>
    
    
}
export default EventHand;