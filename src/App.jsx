import { useState } from 'react'
import Quiz from './components/quiz';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app-container' style={{ padding: "50px", background: "#fff", width: "500px", height: "400px"}}>
    <h1 style={{ color: "#000", fontSize: "42px", margin: "0 0 20px 0"}}>Quiz App</h1>
    <Quiz />
   </div>
  )
}

export default App
