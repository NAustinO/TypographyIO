import React from "react";
import Navbar from "./components/Navbar";
import { Router, Routes, Route } from "react-router";
import TypingTest from "./containers/TypingTest";
import TestSetup from "./components/TestSetup";
import RegisterForm from "./containers/RegisterForm";
import LoginForm from "./containers/LoginForm";

const App = (props) => {
  return (
    <div className="app">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<TestSetup/>}/> 
          <Route path='/test' element={<TypingTest/>}/> 
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>} />
        </Routes>
      </Router>
    </div>
  )

} 

export default App;

