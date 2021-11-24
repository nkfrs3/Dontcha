import React, {useState, useEffect} from 'react'
import QuestionCard from './QuestionCard'
// import TfQuestionCard from './TfQuestionCard'
import './TakeQuiz.css'

const StartQuiz = ({quiz, questions}) => {

const [currentQuestion, setCurrentQuestion] = useState(questions[0])
const [index, setIndex] = useState(0)

useEffect(() => {
  console.log(currentQuestion, '!!!!!')
}, [currentQuestion])

const handleNumber = (i) => {
  setIndex(i)
  setCurrentQuestion(questions[i])
}

const handleBack = () => {
  if (index == 0){
    return
  }else setIndex(prev => prev - 1 );
  setCurrentQuestion(questions[index - 1])
}

const handleNext = () => {
  if (index == questions.length -1){
    return;
  } else {
    setIndex(prev => prev + 1);
    setCurrentQuestion(questions[index + 1])
  }
}
  return (
    <div className='question-outer' style={{outline: currentQuestion.correct == true ? '3px solid rgb(10, 209, 10)' : currentQuestion.correct == false ? '3px solid red' : 'none'}}>
    { currentQuestion &&
    <QuestionCard currentQuestion= {currentQuestion} quiz={quiz}/>  }

      <div className='question-control'>
        <div className='arr-num'>
        <span onClick={handleBack} style={{color: index == 0 ? 'gray' : 'white'}}><i class="fas fa-arrow-left"></i></span>
      { <div>{index+1 + "/" + questions.length}</div> }
        <span onClick={handleNext}><i class="fas fa-arrow-right" style={{color: index == questions.length - 1 ? 'gray' : 'white'}}></i></span>
        </div>

      <div className='num-container'>
      {questions.map((question, i) =>
        <span className='num-picker' onClick={e => handleNumber(i)}>{i + 1}</span>
        )}
        </div>
      </div>
    </div>
  )
}

export default StartQuiz
