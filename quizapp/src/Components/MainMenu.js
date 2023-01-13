import React, {useContext, useState} from 'react'
import { QuizContext } from '../Helpers/Contexts';

export default function MainMenu() {
  const {gameState, setGameState} = useContext(QuizContext);

  return (
    <div className='Menu'>
      <button onClick={()=>{setGameState("quiz")}}> Start Quiz</button>
    </div>
  );
}
