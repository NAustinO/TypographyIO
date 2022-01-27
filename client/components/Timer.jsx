import React from 'react';
import reactDom from 'react-dom';
import styled from 'styled-components';
import '../stylesheets/styles.css';

const Timer = ({ time }) => {

  return (
    <StyledTimer>
      <h2>Time Remaining</h2>
      <div style={{fontSize: '24pt'}}>{time}</div>
    </StyledTimer>
  )
} 

const StyledTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export {StyledTimer};
export default Timer;