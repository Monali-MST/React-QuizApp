import React, {useState, useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts';

function EndScreen() {
  const {score, setScore} = useContext(QuizContext)

  return (
    <div>
      <h3>{score}</h3>
    </div>
  )
}

export default EndScreen
