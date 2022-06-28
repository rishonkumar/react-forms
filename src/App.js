import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[firstName,setFirstName] = useState("")
  const[lastName,setLastName] = useState("")

  function handleFirstChange(event) {
    setFirstName(event.target.value)    
  }

  function handleLastChange(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <input 
        type="text"  
        placeholder='First name'
        onChange={handleFirstChange}
      />
      <input 
        type="text"  
        placeholder='Last name'
        onChange={handleLastChange}
      />
    </form>
  );
}

export default App;
