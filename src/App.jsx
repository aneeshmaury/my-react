import { useState } from 'react'
import Indian from './components/Indian'
import Today from './components/Today'
import Currenttime from './components/Currenttime'
import Propseg from './components/propseg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Propseg text="hi this is main use of prop"/>
      <Indian/>
      <Currenttime/>
      <Today/>
    </>
  )
}

export default App
