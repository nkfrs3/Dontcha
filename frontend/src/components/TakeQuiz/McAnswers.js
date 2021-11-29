import React, {useState, useRef, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer } from '../../store/answers';
import './TakeQuiz.css'
import Results from './Results';

const McAnswers = ({currentQuestion, setQuizScore, setQuizComplete, quizScore, numAnswered}) => {
  const dispatch = useDispatch()
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const radioInput = useRef()
  const [correctAnswer, setCorrectAnswer] = useState(currentQuestion.answers.find(ans => ans.correct == true))
  const [answered, setAnswered] = useState(false)

  const user = useSelector(state => state.session.user)

  useEffect(()=> {
    setAnswered(false)
    if (currentQuestion.answered == true){
      setAnswered(true);
    }
  }, [answered, currentQuestion])

  useEffect(() => {
    setCorrectAnswer(currentQuestion.answers.find(ans => ans.correct == true))

  }, [currentQuestion])

  const handleAnswer = (e) => {
    numAnswered.current++;
   if (e.target.value == correctAnswer.value){
     currentQuestion.correct = true;
     setQuizScore(prev => prev + 1);
   }else {
     currentQuestion.correct = false;
   }
   currentQuestion.answered = true;
   currentQuestion.chosenAnswer = e.target.value

   //to do: add e.target.value to the column value on the submitted answers table
   dispatch(postAnswer(user.id, currentQuestion.id, currentQuestion.correct, e.target.value))
   setAnswered(true);
  }

  // useEffect(() => {
  //   console.log(currentQuestion)
  // }, [currentQuestion])
  return (
    <div className='ans-container' ref={radioInput}>


      {currentQuestion.answers.map((ans, i) =>
      <>
     {!currentQuestion.answered && !answered &&
      <div className='ans'  >
        <input type = 'radio' value={ans.value} name='answers'
        onClick={e => handleAnswer(e) }
        className={"radio-answers"}
        // disabled={currentQuestion.answered == true}
        >
        </input>
        <span>{letters[i]}. </span>
        <h4>{ans.value}</h4>
      </div>}
      </>
      )}

        { currentQuestion.answered && answered &&
        <Results currentQuestion={currentQuestion} correctAnswer={correctAnswer}/>
      }
    </div>
  )
}

export default McAnswers
