import React from 'react'
import { useHistory } from 'react-router-dom';

const QuizComplete = ({score, length}) => {

  const history = useHistory()

  const handleRedirect = () => {

    history.push('/quizzes');
  }

  const getPercent = (a, b) => {

    const dec = ((a/b) * 100)
    if (dec % 1 == 0) return dec;
    return dec.toFixed(2);

  }

  return (
    <div className='complete-inner'>
        <h6>You got  <span>{score}/{length}</span> correct.</h6>
        <div className='percent'>
          <p className='percent-num'>{getPercent(score, length)}</p> <p>%</p>
          </div>
      <span className='take-another' onClick={handleRedirect}>take another</span>
    </div>
  )
}

export default QuizComplete
