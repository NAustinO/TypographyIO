import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import reactDom from 'react-dom';

import styled from 'styled-components';


const TestSetup = ({ ...rest }) => {
  const navigate = useNavigate();

  const [testDuration, setTestDuration] = useState(60);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    navigate('/test', {
      state: {
        name: name, 
        duration: testDuration
      }
    });
  }
  
  return (
    <StyledForm>
      <div>
        <h3>Test Setup</h3>
        <hr style={{ }}></hr>
      </div>
      <div>
        <Header>Name: </Header>
        <input placeholder="required" name="name" onChange={(e) => setName(e.target.value)}  type='text'></input>
      </div>
      <div>
        <Header>Test Duration</Header>
        <div style={{fontSize: '8pt'}}>{testDuration} seconds</div>
        {/* <input name="time" onChange={(e) => setTestDuration(e.target.value)} defaultValue={testDuration} type='number' min={30}></input> */}
        <input type="range" min={10} max={120} onChange={(e) => setTestDuration(e.target.value)} defaultValue={testDuration}/>

      </div>
      <div>
        <button onClick={handleSubmit}>Start test</button>
      </div>
    </StyledForm>
  )
} 
 

const Header = styled.span`
  font-size: 14pt;
  margin-bottom: 10px;
`;
const StyledForm = styled.form`
  justify-self: center;
  background-color: white; 
  width: 300px;
  height: 300px;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: space-evenly;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
`;


export default TestSetup;