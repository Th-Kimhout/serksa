import { useState } from 'react'
import './App.css'
import CoursePage from './pages/product/CoursePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CoursePage/>
    </>
  )
}

export default App
