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
    // validating user input 
    if (username.length < 5) { 
      alert('Username must be more than 5 characters');
      return;
    };
    if (password.length < 5) { 
      alert('Password must be more than 5 characters');
      return;
    }

    let userInfo = {username: username, password: password};
  
    fetch('/api/register', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then(response => {
        window.alert('Successfully created user. Redirecting to homepage');
        navigate('/')
      })
      .catch(err => {
        console.log(err);
      }) 
  }

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

