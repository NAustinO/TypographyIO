const RegisterForm = (props) => {

  const [time, updateTime] = useState(60);
  const [score, updateScore] = useState(0);
  const [standings, updateStandings] = useState('');

  useEffect(() => {
    updateStandings(getStandings());
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
    fetch('')
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

export default RegisterForm;

