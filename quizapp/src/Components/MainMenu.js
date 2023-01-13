import React, {useContext, useState} from 'react'
import App from '../App';
import { QuizContext } from '../Helpers/Contexts';
import "../App.css";

export default function MainMenu() {
  const {gameState, setGameState} = useContext(QuizContext);

  return (
    <div className='Menu'>
      <button onClick={()=>{setGameState("quiz")}}> Start Quiz</button>
    </div>
  );
}
