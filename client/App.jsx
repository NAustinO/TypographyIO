import React from "react";
import ComponentRouter from "./ComponentRouter";
import Navbar from "./components/Navbar";

const App = (props) => {
  return (
    <div className="app">
      {/* <Navbar/> */}
      <ComponentRouter/>
    </div>
  )

} 

export default App;

