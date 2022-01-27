import React from 'react';
import reactDom from 'react-dom';
import '../stylesheets/styles.css';

const Scorecard = ({ score, initialTime }) => {

  return (
    <div className='black-border'>
      <div>
        Score (Total Characters Matched): <span>{score}</span>
      </div>
      <div>
        Characters/Min: <span>{Math.floor(score/initialTime)}</span>
      </div>
    </div>
  )
} 

export default Scorecard;