
import React, { useState } from 'react';
import '../stylesheets/styles.css';

const TypingWindow = ({ handleMatchedInput, currentPhrase, queue, ...rest }) => {

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

  return (
    <div className='typing-window'>
      <div className='typing-window-section flex-row space-evenly'>
        <div className='typing-window-section-label'>Up Next:</div>
        <div className='typing-window-section-content'>
        {
          queue.slice().reverse().map((el, index) => {
            return <div type="text" key={index}>{el}</div>
          })
        }
        </div>
      </div>
      <div className='typing-window-section flex-row space-evenly'>
        <span className='typing-window-section-label'>
          Phrase: 
        </span>
        <div className='test-phrase-area typing-window-section-content'>{currentPhrase}</div>
      </div>
      <div className='typing-window-section flex-row space-evenly'>
        <span className='typing-window-section-label'>
          Type Here: 
        </span>
        <input className='typing-window-section-content typing-input-area' autoFocus type="text" onChange={handleTextChange} />
      </div>
    </div>
  )
} 



export default TypingWindow;