import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [Number, setNumber] = useState(0)
  const [Status, setStatus] = useState('No Change')
  const [S , setS] = useState('')

  const IncreaseNumber =() => {
    if(Number < 20){
      setNumber(Number + 1)
      setStatus('Number is Increased by 1')
      setS('green')
    }
    else{
      setStatus('Number Incresing limite exeed')
      setS('red')
    }
  }
  
  const DecreaseNumber =() => {
    if(Number > 0){
      setNumber(Number - 1)
      setStatus('Number is Decreased by 1')
      setS('green')
    }
    else{
      setStatus('Number Decresing limite exeed')
      setS('red')
    }
  }

  return (
    <>
    <h2>hello ji , I am Rohit Kurmi </h2>

    <p>Please set your favorite number :- {Number}</p>

    <button onClick={IncreaseNumber}>Increase Number</button>
    <br />
    <p class={S} >! Status :- {Status}</p>
    <br />
    <button onClick={DecreaseNumber}>Decrease Number</button>
    </>
  )
}

export default App
