import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import '../stylesheets/styles.css';

const Leaderboard = ({  standings }) => {

  const leaders = standings.map((leader, index) => {
    return <div key={leader+index}>{leader.username} {leader.score}</div>;
  })

  return (
    <div className='black-border'>
      <h3>Standings</h3>
      {leaders}
    </div>
  )
} 

export default Leaderboard;