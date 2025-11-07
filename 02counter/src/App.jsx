import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 5;
  let [counter,setCounter] = useState(15);

  const addValue=()=>{
    if(counter==20){
      alert("counter cannot exceed 20");
      return;
    }
    setCounter(counter+1);
    console.log("value added:",counter);
  }

  const removeValue=()=>{
    if(counter==0){
      alert("counter cannot be less than 0");
      return;
    }
    setCounter(counter-1);
    console.log("value removed:",counter);
  }

  return (
    <>
    <h1>Chai aur react {counter}</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button> 
    {/* only passing reference here onClick so that it doesnt get directly executed and only on a click */}
    <br />
    <button onClick={removeValue}>remove Value {counter}</button>
    </>
  )
}

export default App
