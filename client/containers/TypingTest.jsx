
import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import Scorecard from '../components/Scorecard';
import Leaderboard from '../components/Leaderboard';
import TypingWindow from '../components/TypingWindow';
import CustomKeyboard from '../components/CustomKeyboard';
import Keyboard from '../components/Keyboard';
import sampleText from '../../server/data/phrases';

const TypingTest = () => {
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [standings, setStandings] = useState([]);
  const [phrases, setPhrases] = useState([]);

  // called on initial render 
  useEffect(() => {
    getStandings();
    parsePhrases(sampleText);
  }, [])


  useEffect(() => {
    if (time === 0) {
      endGame();
    } else { 
      setTimeout(()=> {
        setTime(time - 1);
      }, 1000);
    }
  }, [time])

  // called when the game is ended 
  const endGame = () => {

  }

  const getNextPhrase = () => {
    if (phrases.length === 1) {
      parsePhrases(sampleText);
    }
    let phrase = phrases.pop();
    updatePhrases()

  }

  /**
   * 
   * @param {String} phrase
   */
  const parsePhrases = (phrase) => {
    updatePhrases(phrase.split(' ')); // splits the phrase string on spaces and sets the state 
  }



  // called on initial render to updated the standings state and pass to child component 
  const getStandings = () => {
    fetch('api/standings', {
      method: 'GET', 
    })
      .then(response => response.json())
      .then(data => {
        setStandings(data);
      })
      .error(err => {
        console.log(err);
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