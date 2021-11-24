import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams, Redirect } from 'react-router-dom'
import { getQuestions } from '../../store/questions'
import StartQuiz from '../TakeQuiz/StartQuiz'
import './quiz.css'

const Quiz = () => {
  const history = useHistory()
  const params = useParams()
  const quizId = params.id
  // const [quizQuestions, setQuizQuestions] = useState([]);
  const dispatch = useDispatch()
  const questions = useSelector(state => state.questions)
  const quizzes = useSelector(state => state.quizzes.all)
  const [started, setStarted] = useState(false)
  // const [currentQuestion, setCurrentQuestion] = useState(null);

  const [loaded, setLoaded] = useState(false);
  const [ currentQuiz, setCurrentQuiz] = useState(null)

  useEffect(()=> {
    if (!quizzes[quizId]){
      history.push('/quizzes')
    }
  }, [quizzes])

useEffect(() => {
    dispatch(getQuestions(quizId))

}, [])

const handleStart = (e) => {
  e.stopPropagation()
  setStarted(true)
  // setCurrentQuestion(questions[quizId][0])
}
  const parseDate = (date) => {
    if (!date) return;
    const splitDate = date.split('-')
    console.log(splitDate)
    const day = splitDate[2].slice(0, 2)
    console.log(day)

    return `${splitDate[1]}/${day}/${splitDate[0]}`;
  }

  return (
    <div>
      <h2 className='quiz-title'>{quizzes[quizId]?.title}</h2>
    <div className="start-btn-cont">
     {!started && <button onClick={e => handleStart(e)}>START</button>}
     </div>
      {started && questions[quizId] &&
        <StartQuiz quiz={quizzes[quizId]} questions={questions[quizId]}/>
      }

    {quizzes[quizId]?.User &&
    <div className='author-info'>
      <div className='prof-icon'><i class={quizzes[quizId]?.User.profileIcon}></i></div>
      <div className='auth-info'>
        <p>created by:</p>
        <h5>{quizzes[quizId]?.User.username}</h5>
      </div>
      <p className='d8'>{parseDate(quizzes[quizId]?.createdAt)}</p>
    </div>
    }
    </div>
  )
}

export default Quiz
