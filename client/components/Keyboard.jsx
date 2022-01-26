import React, { useState } from 'react';

import '../stylesheets/styles.css';



const Keyboard = (props) => {

  const [layoutName, setLayoutName] = useState('default');

  document.addEventListener('keydown', (e) => {
    console.log(e.code);
  })
  const layout = {
    default: [
      '` 1 2 3 4 5 6 7 8 9 0 - = {Backspace}',
      '{tab} q w e r t y u i o p [ ] \\',
      '{lock} a s d f g h j k l ; \' {enter}',
      '{shift} z x c v b n m , . / {shift}',
      '{Control} {Alt} {Meta} { } cmd op'
    ],
    shift: [
      '~ ! @ # $ % ^ & * ( ) _ + {Backspace}',
      '{tab} Q W E R T Y U I O P { } |',
      '{lock} A S D F G H J K L : " {enter}',
      '{shift} Z X C V B N M < > ? {shift}',
      'fn ctrl op cmd {space} cmd op'
    ]
  }

  const keyMap = {
    shift: 'shift', 
    lock: 'caps lock', 
    enter: 'enter', 
    bksp: 'delete', 
    space: ''
  }

  const generateKeys = () => {
    const divList = [];
    const keyRows = layout[layoutName];
    keyRows.forEach(row => {
      const keys = row.split(' ');
      keys.forEach(key => {
        if (key[0] === '{') key = keyMap[key];
        divList.push(<div>{key}</div>)
      })
    })
    return divList;
  }

  return (
    <div className='keyboard'>
      {generateKeys()}
    </div>


  )

} 

export default Keyboard; 