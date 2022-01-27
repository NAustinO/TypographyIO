import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import RegisterForm from './containers/RegisterForm';
import LoginForm from './containers/LoginForm';
import TypingTest from './containers/TypingTest';
import TestSetup from './components/TestSetup';
 
//<Route path='/' element={<TypingTest/>}/> 

const ComponentRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<TestSetup/>}/> 
      <Route path='/test' element={<TypingTest/>}/> 
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/login' element={<LoginForm/>} />
    </Routes>
  )
}

export default ComponentRouter; 