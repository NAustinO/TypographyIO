import React from 'react';
import '../stylesheets/styles.css';

const TypingWindow = ({}) => {
  const [queue, setQueue] = useState([]);
  const [phrase, setPhrase] = useState('');
  const [currentInput, setCurrentInput] = useState('');

  const handleTextChange = (event) => {
    setCurrentInput(event.target.value);
    // if the phrase is equal to theh current input 
      // call the get next from the parent component
      // set a new phrase 
  }


  return (
    <div className='black-border'>
      <input type="text" onChange={handleTextChange} />
    </div>
  )
} 

export default TypingWindow;