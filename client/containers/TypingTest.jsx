
import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import Scorecard from '../components/Scorecard';
import Leaderboard from '../components/Leaderboard';
import TypingWindow from '../components/TypingWindow';
import CustomKeyboard from '../components/CustomKeyboard';
import Keyboard from '../components/Keyboard';
import sampleText from '../../server/data/phrases';

const TypingTest = () => {
  const initialTime = 60; 
  const queueLength = 5; 

  const [time, setTime] = useState(initialTime);
  const [score, setScore] = useState(0);
  const [standings, setStandings] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [queue, setQueue] = useState([]); // queue length of 5 
  const [currentPhrase, setCurrentPhrase] = useState('');
  // const [timeElapsed, setTimeElapsed] = useState(0);


  // called on initial render 
  useEffect(() => {
    getStandings(); // load the standings and set the state 

    const parsedPhrases = sampleText.split(' ').reverse();

    const initialPhrase = parsedPhrases.shift(); 

    const newQueue = parsedPhrases.splice(1, queueLength+1);

    setCurrentPhrase(initialPhrase);
    // parsePhrases(sampleText); // set the phrases state 
  
    setQueue(newQueue); // sets the queue to the new queue array 
    
    setPhrases(parsedPhrases); // resets the phrases array state
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

  const handleMatchedInput = () => {
    // update the score 
    setScore(score + currentPhrase.length) 

    // update the current phrase 
    const nextPhrase = queue.shift();
    
    setCurrentPhrase(nextPhrase);
  
    // update the queue
    queue.push(phrases.shift());
    setQueue(queue);

    // update the phrases array 
    setPhrases(phrases);
  }



  /**
   * 
   * @param {String} phrase
   */
  const parsePhrases = (phrase) => {
    // TOOD filter out phrases that are not a certain length 
    setPhrases(phrase.split(' ')); // splits the phrase string on spaces and sets the state 
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
      // .error(err => {
      //   console.log(err);
      // })
  }

  return (
    <div className='typing-test-container'>
      <div>
        <TypingWindow
          queue={queue}
          handleMatchedInput={handleMatchedInput}
          currentPhrase={currentPhrase}
        />
        <CustomKeyboard />
      </div>
      <div>
        <Timer time={time} />
        <Scorecard 
          timeRemaining={time}
          initialTime={initialTime}
          score={score} 
        />
        <Leaderboard standings={standings} />
      </div>
    </div>
  )
}

export default TypingTest;