import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/display.jsx'
import Shadcn from './components/Shadcn.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Display/> */}
   
    <Shadcn/>
    </>
  )
}

export default App
