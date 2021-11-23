import React, {useState, useRef, useEffect} from 'react'
import './TakeQuiz.css'
import Results from './Results';

const McAnswers = ({currentQuestion}) => {


  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const radioInput = useRef()
  const [correctAnswer, setCorrectAnswer] = useState(currentQuestion.answers.find(ans => ans.correct == true))
  const [answered, setAnswered] = useState(false)

  useEffect(()=> {
    if (currentQuestion.answered == true){
      setAnswered(true);
    }
  }, [answered])

  const handleAnswer = (e) => {

   if (e.target.value == correctAnswer.value){
     window.alert('CORRECT!')
     currentQuestion.correct = true;
   }else {
    window.alert('WRONGGG!')
     currentQuestion.correct = false;
   }
   currentQuestion.answered = true;
   setAnswered(true);
  }

  useEffect(() => {
    console.log(currentQuestion)
  }, [currentQuestion])
  return (
    <div className='ans-container' ref={radioInput}>


      {currentQuestion.answers.map((ans, i) =>
      <>
     {!currentQuestion.answered &&
      <div className='ans'  >
        <input type = 'radio' value={ans.value} name='answers'
        onChange={e => handleAnswer(e) }
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
        <Results currentQuestion={currentQuestion} />
      }
    </div>
  )
}

export default McAnswers
