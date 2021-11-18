import React, {useEffect, useState} from 'react'
import './AddAnswers.css'

const AddAnswers = ({currentQuestion, setCurrentQuestion, setNewQuestions, newQuestions}) => {
  // let [prompt, setPrompt] = useState(currentQuestion.prompt);
  let [answers, setAnswers] = useState([{value: "", correct: false} ])
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  useEffect(()=> {
    console.log(currentQuestion, newQuestions)
  }, [])

const handleChange = (e) => {
    // setPrompt(e.target.value)

    setNewQuestions(prev => {
        let newState = [...prev]
        newState[currentQuestion.index].prompt = e.target.value;
        return newState
         }
      )
  }

  return (
    <div className='add-answers-container'>
      <span className='num'>#{currentQuestion.index + 1}</span>
      <input
      placeholder='New Question'
      required
      value={newQuestions[currentQuestion.index].prompt}
      onChange={e => handleChange(e)}
      >
      </input>

      <div className='answers-container'>
     { answers.map( (answer, i) =>
     <div className='individual-answer'>
      <span>{letters[i]}</span>
      <div>{answer.value ? answer.value : "option"}</div>
      </div>
     )}
      </div>
      <span className='add-answer-btn'>add choice</span>
    </div>
  )
}

export default AddAnswers
