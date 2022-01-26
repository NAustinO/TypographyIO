import React, { useState, useEffect } from 'react';
import reactDom from 'react-dom';
import Timer from './Timer';
import Scorecard from './Scorecard';
import Leaderboard from './Leaderboard';
import TypingWindow from './TypingWindow';
import CustomKeyboard from './CustomKeyboard';

const App = (props) => {

  const [time, updateTime] = useState(60);
  const [score, updateScore] = useState(0);
  const [standings, updateStandings] = useState('');
  


  return (
    <div className='container'>
      <div>
        <TypingWindow/>
        <CustomKeyboard />
      </div>
      <div>
        <Timer time={time} />
        <Scorecard score={score} />
        <Leaderboard standings={standings} />
      </div>
    </div>
  )
} 

export default App;

