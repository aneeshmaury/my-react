import { useState } from 'react';
import Indian from './components/Indian';
import Today from './components/Today';
import Currenttime from './components/Currenttime';
import Propseg from './components/propseg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let text = ["aneesh", "maury", "vikas", "maurya"];

  return (
    <>
      <h1>Food</h1>
      <ul class="list-group">
        {text.map((item)=>(
          <li class="list-group-item">{item}</li>
        ))}

      </ul>
      <Indian />
      <Currenttime />
      <Today />
    </>
  );
}

export default App;
