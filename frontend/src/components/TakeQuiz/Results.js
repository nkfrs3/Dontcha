import React, {useEffect} from 'react'

const Results = ({currentQuestion, correctAnswer}) => {

  // useEffect(()=> {
  //   console.log(currentQuestion)
  //   console.log(correctAnswer.value)
  // }, [currentQuestion])

  return (
    <div className='results' >

      {currentQuestion.correct == true ?
      <div className='result-container'>
      <h3>CORRECT!</h3>
      <span className='check'><i class="fas fa-check"></i></span>
      <div>{correctAnswer.value == 't' ? "True" : correctAnswer.value == 'f' ? "False" : correctAnswer.value}</div>
      </div>
      :
      <div className='result-container'>
        <h3>Sorry...</h3>
      <span className='wrong'><i class="fas fa-times"></i></span>
      <div>You Chose: {currentQuestion.chosenAnswer  == 't' ? "True" : currentQuestion.chosenAnswer === 'f' ? "False" : currentQuestion.chosenAnswer}</div>
      <div>Correct Answer: {correctAnswer.value == 't' ? "True" : correctAnswer.value === 'f' ? "False" : correctAnswer.value }</div>
      </div>
      }

    </div>
  )
}

export default Results
