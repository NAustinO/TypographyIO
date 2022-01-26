
import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import Scorecard from '../components/Scorecard';
import Leaderboard from '../components/Leaderboard';
import TypingWindow from '../components/TypingWindow';
import CustomKeyboard from '../components/CustomKeyboard';
import Keyboard from '../components/Keyboard';

const TypingTest = () => {
  const [time, updateTime] = useState(60);
  const [score, updateScore] = useState(0);
  const [standings, updateStandings] = useState([]);

  // on first set
  useEffect(() => {
    getStandings();
  }, [])


  useEffect(() => {
    if (time === 0) {
      endGame();
    } else { 
      setTimeout(()=> {
        updateTime(time - 1);
      }, 1000);
    }
  }, [time])

  const endGame = () => {

  }

  const getStandings = () => {
    console.log('getting standings ')
    fetch('api/standings', {
      method: 'GET', 
    })
      .then(response => response.json())
      .then(data => {
        updateStandings(data);
      })
  }

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

export default TypingTest;