import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { StyledTimer } from './Timer';
import '../stylesheets/styles.css';

const Leaderboard = ({  standings }) => {

  const leaders = standings.map((leader, index) => {
    return <div key={leader+index}>{leader.username} ---- {leader.score}</div>;
  })

  return (
    <StyledTimer>
      <h3>Current Leaderboard</h3>
      {leaders}
      <div style={{fontSize: '10pt', marginTop: '15px'}}>**Note: results are in characters/min**</div>
    </StyledTimer>
  )
} 

export default Leaderboard;