import React from 'react';
import reactDom from 'react-dom';
import '../stylesheets/styles.css';

const Leaderboard = ({  standings }) => {

  

  return (
    <div className='black-border'>
      <h3>Standings</h3>
      {standings}
    </div>
  )
} 

export default Leaderboard;