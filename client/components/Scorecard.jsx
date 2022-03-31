import React from 'react';
import styled from 'styled-components';
import reactDom from 'react-dom';
import { StyledTimer } from './Timer';
import '../stylesheets/styles.css';

const Scorecard = ({ score, initialTime, timeRemaining, ...rest }) => {

  return (
    <StyledTimer>
      <h2>Scorecard</h2>
      <div>
        <strong>Score (Total Characters) : </strong><span>{score}</span>
      </div>
      <div>
        <strong>Characters/Min : </strong>
        <span>
          {Number.isNaN(Math.floor(score/(initialTime - timeRemaining) * 60)) ? 
            0 : Math.floor(score/(initialTime - timeRemaining) * 60)
          }
        </span>
      </div>
    </StyledTimer>
  )
} 



export default Scorecard;