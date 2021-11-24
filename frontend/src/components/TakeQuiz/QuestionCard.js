import React, {useState, useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postScore } from '../../store/answers'
import McAnswers from './McAnswers'
import TfAnswers from './TfAnswers'
import MwAnswers from './MwAnswers'
import QuizComplete from './QuizComplete'

const QuestionCard = ({currentQuestion, quiz}) => {

  const dispatch = useDispatch();
  const [quizScore, setQuizScore] = useState(0);
  const numAnswered = useRef(0)
  const [quizComplete, setQuizComplete] = useState(false);
  const user = useSelector(state => state.session.user)

  useEffect(() => {

    if (numAnswered.current == quiz.questions.length ){
      setTimeout(()=> setQuizComplete(true), 3000)
      const score = ((quizScore/ quiz.questions.length) * 100).toFixed(2);
      dispatch(postScore(score, quiz.id, user.id))
    }
   }, [numAnswered, quizScore]);

  const handleQuestionType = (type) => {
    switch(type) {
      case 'mc':
        return <McAnswers currentQuestion= {currentQuestion} setQuizScore={setQuizScore} setQuizComplete={setQuizComplete} quizScore={quizScore} numAnswered={numAnswered}/>
      case 'tf':
        return <TfAnswers currentQuestion={currentQuestion} setQuizScore={setQuizScore} setQuizComplete={setQuizComplete} quizScore={quizScore} numAnswered={numAnswered}/>
      case 'mw':
        return <MwAnswers currentQuestion={currentQuestion} setQuizScore={setQuizScore} setQuizComplete={setQuizComplete} quizScore={quizScore}  numAnswered={numAnswered}/>
      default:
        return;
          }
  }


  return (
    <>
  {  !quizComplete ?
    <div className='question-card'>
      <h2>{currentQuestion?.prompt}</h2>

      <div className='answers-container'>
      {handleQuestionType(currentQuestion.type)}

      </div>
    </div> :
      <div className='complete-card'>
        <QuizComplete score={quizScore} length={quiz.questions.length} />
      </div>
    }

    </>
  )
}

export default QuestionCard
