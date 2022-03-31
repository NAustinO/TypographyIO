const generateRandomText = (secondsOfTest) => {

  // helper functios 
  const generateWord = (length) => {
    let output = ''; 
    for (let i = 0; i < length; i++) {
      output += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return output; 
  }
  // helper function
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
  let result = ''; 

  const totalCharacters = secondsOfTest * 30; 
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+\\|\'`~/>?<:;';
  const charactersLength = characters.length; 
  while (result.length < totalCharacters) {
    result += generateWord(getRandomInt(4, 15)) + ' '; 
  }

 return result;
}

export default generateRandomText;