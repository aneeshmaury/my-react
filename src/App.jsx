import { useState } from 'react';
import Indian from './components/Indian';
import Today from './components/Today';
import Currenttime from './components/Currenttime';
import Propseg from './components/propseg';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventHand from './components/EventHandling/UseState';
import { UsestateMap } from './components/hooks/UseStateMap';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
const name =["aneesh","pradeep","sankar","ankit"]

  return(<>
               {name.map((item)=>(
                     <Propseg key={item} name={item}/>
              ))}
   
                   <UsestateMap/>
                 <EventHand/>
                    <Indian />
                   <Currenttime />
                 <Today />
    </>
           );

               }
export default App;
