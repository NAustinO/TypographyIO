
import React, { useState } from 'react';
import '../stylesheets/styles.css';

const TypingWindow = ({ handleMatchedInput, currentPhrase, queue }) => {

  const [currentInput, setCurrentInput] = useState('');

  // used to handle the change within the typing area
  const handleTextChange = (event) => {
    setCurrentInput(event.target.value); 

    // this is how to reset the value
    if (event.target.value === currentPhrase) {
      handleMatchedInput()
      event.target.value = '';
      setCurrentInput('');
    }
  }

  // const componentifyQueue = () => {

  // }
  
  return (
    <div className='typing-window black-border'>
      <div>
      </div>
      <div className='flex-row space-evenly'>
        <span>
          Phrase: 
        </span>
        <div className='test-phrase-area'>{currentPhrase}</div>
      </div>
      <div className='flex-row space-evenly'>
        <span>
          Type Here: 
        </span>
        <input className='typing-input-area' type="text" onChange={handleTextChange} />
      </div>
    </div>
  )
} 

export default TypingWindow;