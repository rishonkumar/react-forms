import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[formData,setFormData] = useState(
     {firstName: "", lastName: ""})

     console.log(formData)


  function handleChange(event) {
      // console.log(event.target.name)
      setFormData(prevFormData => {
        return{
          ...prevFormData,
          [event.target.name] : event.target.value
        }
      })
  }


  return (
    <form>
      <input 
        type="text"  
        placeholder='First name'
        onChange={handleChange}
        // to distinguish which handle to update
        name = "firstName"
      />
      <input 
        type="text"  
        placeholder='Last name'
        onChange={handleChange}
        name = "lastName"
      />
    </form>
  );
}

export default App;
