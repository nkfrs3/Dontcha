import React, {useState, useRef, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer } from '../../store/answers';
import './TakeQuiz.css'
import Results from './Results';


const MwAnswers = ({currentQuestion, setQuizScore, setQuizComplete, quizScore, numAnswered}) => {
    const dispatch = useDispatch()

    const [correctAnswer, setCorrectAnswer] = useState(currentQuestion.answers.find(ans => ans.correct == true))
    const [answered, setAnswered] = useState(false)
    const [guess, setGuess] = useState("")

    const user = useSelector(state => state.session.user)

    useEffect(()=> {
      setAnswered(false)
      if (currentQuestion.answered == true){
        setAnswered(true);
      }
    }, [answered, currentQuestion])


    const handleAnswer = (answer) => {
      numAnswered.current++;
      const isCorrect = answer.toLowerCase() == correctAnswer.value.toLowerCase();
     if (isCorrect){
       currentQuestion.correct = true;
       setQuizScore(prev => prev + 1);
     }else {
       currentQuestion.correct = false;
     }
     currentQuestion.answered = true;
     currentQuestion.chosenAnswer = answer

     dispatch(postAnswer(user.id, currentQuestion.id, currentQuestion.correct, answer))
     setAnswered(true);
    }

    const handleChange = (e) => {
      setGuess(e.target.value);
    }

    const handleKey = (e) => {
      if (e.key === 'enter' || e.keyCode === 13){
        handleAnswer(guess)
      }
    }

    return (
      <div className='ans-container'>


       {!currentQuestion.answered && !answered &&
       <>
        <div className='ans mw-ans'  >
          <input
          type='text'
          value={guess}
          onChange={e => handleChange(e)}
          onKeyDown={e => handleKey}
          className="mw-answers"
          placeholder='???'
          required
          >
          </input>
        </div>

        <button className='check-ans' onClick={e => handleAnswer(guess)}

        style={{backgroundColor: guess.length >=1 ? '#8f77ac' : 'gray' }}

        >
          Check</button>
        </>
        }

          { currentQuestion.answered && answered &&

          <Results currentQuestion={currentQuestion} correctAnswer={correctAnswer}/>
        }
      </div>
  )
}

export default MwAnswers
