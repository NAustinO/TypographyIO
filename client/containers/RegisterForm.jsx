import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/styles.css';
import { useNavigate } from "react-router";

const RegisterForm = (props) => {
  
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log('handling submit')
    fetch('api/register', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(event);
        navigate('/')
      })
      .catch(err => {
        console.log(err)
      }) 
  }

  // {*onClick = {() => {navigate('/')}}*}
  // method="post" action="post"
  return (
    <div className="register-container"> 
      <h1>Welcome please enter your password</h1>
      <form> 
        <label>
          Username
          <input type="text" name="username" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <input type="button" value="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  )
} 


export default RegisterForm;

