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
      {text.map((name, index) => (
        <Propseg key={index} name={name} />
      ))}
      <Indian />
      <Currenttime />
      <Today />
    </>
  );
}

export default App;
