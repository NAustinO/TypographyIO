import React, { useState } from 'react';

import '../stylesheets/styles.css';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';


const CustomKeyboard = ({ type }) => {

  const [layoutName, setLayoutName] = useState('default');
  const layout = {
    default: [
      '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      '{tab} q w e r t y u i o p [ ] \\',
      '{lock} a s d f g h j k l ; \' {enter}',
      '{shift} z x c v b n m , . / {shift}',
      'fn ctrl op cmd {space} cmd op'
    ],
    shift: [
      '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
      '{tab} Q W E R T Y U I O P { } |',
      '{lock} A S D F G H J K L : " {enter}',
      '{shift} Z X C V B N M < > ? {shift}',
      'fn ctrl op cmd {space} cmd op'
    ]
  }

  // document.addEventListener('keydown' , (e) => {
  //   console.log(e.code)
  //   console.log(e.key)
  //   if (e.key === 'Shift' || e.key==="CapsLock") handleShift();
  // });

  const onKeyPress = (button) => {
    console.log('Button pressed', button);
    if (button === '{shift}' || button === '{lock}') handleShift();
  } 

  const handleShift = () => {
    let toggledLayout = (layoutName === 'default') ? 'shift' : 'default';
    setLayoutName(toggledLayout);
  }

  const onChangeInput = (event) => {
    console.log(event)
    // // let input = event.target.value; 
    // console.log(event.target)
  }
  return (
    <Keyboard 
      // keyboardRef ={r => (keyboard = r) }
      layout={layout}
      layoutName={layoutName}
      onChange = {(input) => onChangeInput(input)}
      onKeyPress = {(button) => onKeyPress(button)}
    />
  )
} 

export default CustomKeyboard;