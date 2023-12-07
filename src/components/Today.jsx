let Today=()=>{
    let time= new Date();
        return <p> {time.toLocaleDateString()} -
         {time.toLocaleTimeString()}</p> 
}
export default Today;