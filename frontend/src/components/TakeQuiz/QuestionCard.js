import React, {useState, useEffect} from 'react'
import McAnswers from './McAnswers'
import TfAnswers from './TfAnswers'
import MwAnswers from './MwAnswers'

const QuestionCard = ({currentQuestion}) => {

  const [quizScore, setQuizScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleQuestionType = (type) => {
    switch(type) {
      case 'mc':
        return <McAnswers currentQuestion= {currentQuestion} setQuizScore={setQuizScore} setQuizComplete={setQuizComplete} quizScore={quizScore}/>
      case 'tf':
        return <TfAnswers currentQuestion={currentQuestion} setQuizScore={setQuizScore} setQuizComplete={setQuizComplete} quizScore={quizScore}/>
      case 'mw':
        return <MwAnswers currentQuestion={currentQuestion} setQuizScore={setQuizScore} setQuizComplete={setQuizComplete} quizScore={quizScore}/>
      default:
        return;
          }
  }


  return (
    <div className='question-card'>
      <h2>{currentQuestion?.prompt}</h2>

      <div className='answers-container'>
      {handleQuestionType(currentQuestion.type)}

      </div>
    </div>
  )
}

export default QuestionCard
