import React from 'react';
import reactDom from 'react-dom';
import '../stylesheets/styles.css';

const Scorecard = ({ score }) => {


  return (
    <div className='black-border'>
      Score: <span>{score}</span>
    </div>
  )
} 

export default Scorecard;