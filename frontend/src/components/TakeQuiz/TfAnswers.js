import React, {useState, useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { postAnswer } from '../../store/answers';
import Results from './Results';

const TfAnswers = ({currentQuestion, numAnswered, setQuizScore}) => {

    const dispatch = useDispatch();
    const letters = ['T', 'F']
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

    const handleAnswer = (e) => {

     if (e.target.value == correctAnswer.value){
      //  window.alert('CORRECT!')
      numAnswered.current++;
       currentQuestion.correct = true;
       setQuizScore(prev => prev + 1);
     }else {
      // window.alert('WRONGGG!')
       currentQuestion.correct = false;
     }
     currentQuestion.answered = true;
     currentQuestion.chosenAnswer = e.target.value
     dispatch(postAnswer(user.id, currentQuestion.id, currentQuestion.correct))
     setAnswered(true);
    }

    useEffect(() => {
      console.log(currentQuestion)
    }, [currentQuestion])
    return (
      <div className='ans-container' ref={radioInput}>


        {currentQuestion.answers.map((ans, i) =>
        <>
       {!currentQuestion.answered && !answered &&
        <div className='ans'  >
          <input type = 'radio' value={ans.value} name='answers'
          onChange={e => handleAnswer(e) }
          className={"radio-answers"}
          // disabled={currentQuestion.answered == true}
          >
          </input>
          <span>{letters[i]}. </span>
          <h4>{ i == 0 ? 'True' : 'False'}</h4>
        </div>}
        </>
        )}

          { currentQuestion.answered && answered &&
          <Results currentQuestion={currentQuestion} correctAnswer={correctAnswer}/>
        }
      </div>
  )
}

export default TfAnswers
