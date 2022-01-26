import React from 'react';
import reactDom from 'react-dom';
import '../stylesheets/styles.css';

const Timer = ({ time }) => {

  

  return (
    <div className='black-border'>
      Time Remaining: <span>{time}</span>
    </div>
  )
} 

export default Timer;