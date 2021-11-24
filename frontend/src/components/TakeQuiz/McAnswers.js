import React, {useState, useRef, useEffect} from 'react'
import './TakeQuiz.css'
import Results from './Results';

const McAnswers = ({currentQuestion, setQuizScore, setQuizComplete, quizScore}) => {


  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const radioInput = useRef()
  const [correctAnswer, setCorrectAnswer] = useState(currentQuestion.answers.find(ans => ans.correct == true))
  const [answered, setAnswered] = useState(false)

  useEffect(()=> {
    setAnswered(false)
    if (currentQuestion.answered == true){
      setAnswered(true);
    }
  }, [answered, currentQuestion])

  const handleAnswer = (e) => {

   if (e.target.value == correctAnswer.value){
     currentQuestion.correct = true;
   }else {
     currentQuestion.correct = false;
   }
   currentQuestion.answered = true;
   currentQuestion.chosenAnswer = e.target.value
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
