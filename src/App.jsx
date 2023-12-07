import { useState } from 'react'
import Indian from './components/Indian'
import Today from './components/Today'
import Currenttime from './components/Currenttime'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Indian/>
      <Currenttime/>
      <Today/>
    </>
  )
}

export default App
