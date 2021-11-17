import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams, Redirect } from 'react-router-dom'
import { getQuestions } from '../../store/questions'
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
  const [currentQuestion, setCurrentQuestion] = useState(null);

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

const handleStart = () => {
  setStarted(true)
  setCurrentQuestion(questions[quizId][0])
}

  return (
    <div>
      <h2 className='quiz-title'>{quizzes[quizId]?.title}</h2>

      {quizId} !!!!!
      <button onClick={handleStart}>START</button>
      {started && currentQuestion &&

          <div className="question-card">
          {currentQuestion.prompt}
        </div>

      }



    </div>
  )
}

export default Quiz
