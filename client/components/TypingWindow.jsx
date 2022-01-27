import React, { useState } from 'react';
import '../stylesheets/styles.css';

const TypingWindow = ({}) => {
  const [queue, setQueue] = useState([]);//  may move this up to parent 
  const [phrase, setPhrase] = useState('Somephrasefornow'); // may move these upt o parent 
  const [currentInput, setCurrentInput] = useState('');

  const handleTextChange = (event) => {
    setCurrentInput(event.target.value); 
    // this is how to 
    if (event.target.value.length > 5) {
      event.target.value = '';
    }
    // if the phrase is equal to theh current input 
      // call the get next from the parent component
      // set a new phrase from the queue 
      // update the queue 
      // reset the typing area to nothing 

      // MAYBE: 
        // Add animation when a phrase is mathced on the score 
        
  }


  return (
    <div className='typing-window black-border'>
      <div className='flex-row space-evenly'>
        <span>
          Phrase: 
        </span>
        <div className='test-phrase-area'>{phrase}</div>
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