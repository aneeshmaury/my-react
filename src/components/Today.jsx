let Today=()=>{
    let time= new Date();
        return <>
            <p> {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
       This is INDIAN Local  g time
        </>
         
         

        
}        
export default Today;