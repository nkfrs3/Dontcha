import React, {useState} from 'react'
import QuestionCard from './QuestionCard'
// import TfQuestionCard from './TfQuestionCard'
import './TakeQuiz.css'

const StartQuiz = ({quiz, questions}) => {

const [currentQuestion, setCurrentQuestion] = useState()


const handleNumber = (i) => {
  setCurrentQuestion(questions[i])
}

  return (
    <div >
      Hello from StartQuiz
    { currentQuestion && <QuestionCard currentQuestion= {currentQuestion} />  }
      <div className='num-container'>
      {questions.map((question, i) =>
        <span className='num-picker' onClick={e => handleNumber(i)}>{i + 1}</span>
        )}
      </div>
    </div>
  )
}

export default StartQuiz
