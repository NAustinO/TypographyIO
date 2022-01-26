import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import RegisterForm from './containers/RegisterForm';
import LoginForm from './containers/LoginForm';
import TypingTest from './containers/TypingTest';


const ComponentRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<TypingTest/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/login' element={<LoginForm/>} />
    </Routes>
  )
}

export default ComponentRouter; 