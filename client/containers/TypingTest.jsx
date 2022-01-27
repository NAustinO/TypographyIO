
import React, { useState, useEffect } from 'react';
import Timer from '../components/Timer';
import Scorecard from '../components/Scorecard';
import Leaderboard from '../components/Leaderboard';
import TypingWindow from '../components/TypingWindow';
import CustomKeyboard from '../components/CustomKeyboard';
import Keyboard from '../components/Keyboard';
import sampleText from '../../server/data/phrases';
import styled from 'styled-components';

const TypingTest = (props) => {
  const initialTime = 60; 
  const queueLength = 5; 

  const [time, setTime] = useState(initialTime);
  const [score, setScore] = useState(0);
  const [standings, setStandings] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [queue, setQueue] = useState([]); // queue length of 5 
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [gameOver, setGameOver] = useState(false);
  // const [timeElapsed, setTimeElapsed] = useState(0);


  // called on initial render 
  useEffect(() => {
    getStandings(); // load the standings and set the state 

    const parsedPhrases = sampleText.split(' ').reverse();
    const initialPhrase = parsedPhrases.shift(); 
    const newQueue = parsedPhrases.splice(1, queueLength+1);

    setCurrentPhrase(initialPhrase); // set the phrases state 
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
    setGameOver(true)
  }

  const handleMatchedInput = () => {

    if (!gameOver) {
      // update the score 
      setScore(score + currentPhrase.length) 
  
      // update the current phrase     
      setCurrentPhrase(queue.shift());
    
      // update the queue
      queue.push(phrases.shift());
      setQueue(queue);
  
      // update the phrases array 
      setPhrases(phrases);
    }
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
    <StyledContainer>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', paddingTop: '50px'}}>
        <StyledHeader>Programming Typing Test</StyledHeader>
        <TypingWindow
          queue={queue}
          handleMatchedInput={handleMatchedInput}
          currentPhrase={currentPhrase}
        />
        <StyledDivider/>
        <CustomKeyboard />
      </div>
      <StyledSidebar>
        <Timer time={time} />
        <StyledDivider />
        <Scorecard 
          timeRemaining={time}
          initialTime={initialTime}
          score={score} 
        />
        <StyledDivider />
        <Leaderboard standings={standings} />
      </StyledSidebar>
    </StyledContainer>
  )
}

const StyledHeader = styled.div`
  font-size: 20pt;
  font-weight: bold;
  font-family: arial;
`;

const StyledDivider = styled.hr`
  border-top: 1px solid rgb(220,220,220);
  width: 85%;
`;

const StyledContainer = styled.div`
  background-color: rgb(244, 246, 246);
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;



const StyledSidebar = styled.div`
  color: rgb(40,40,40);
  display: flex;
  flex-direction: column; 
  row-gap: 10px;
  padding: 10px 40px;
  background-color: lightgrey;
  // justify-content: space-evenly; 
`;
export default TypingTest;