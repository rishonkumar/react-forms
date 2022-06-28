import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // we need state to hold current data
  const[firstName,setFirstName] = useState("")

  function handleChange(event) {
    // console.log("Changed")
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.value)
    setFirstName(event.target.value)
    
  }

  return (
    <form>
      <input 
        type="text"  
        placeholder='First name'
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
