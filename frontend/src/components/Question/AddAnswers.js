import React, {useEffect, useState} from 'react'
import './AddAnswers.css'

const AddAnswers = ({questionIndex, setNewQuestions, newQuestions}) => {
  // let [prompt, setPrompt] = useState(currentQuestion.prompt);
  // let [answers, setAnswers] = useState([{value: "", correct: false}])
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];


  useEffect(()=> {
    console.log(questionIndex, newQuestions)
  }, [questionIndex])

const handleChange = (e) => {
    // setPrompt(e.target.value)

    setNewQuestions(prev => {
        let newState = [...prev]
        newState[questionIndex].value = e.target.prompt;
        return newState
         }
      )
  }

  const handleAnswerChange = (e, i) => {
    setNewQuestions(prev => {
      const copy = [...prev]

      copy[questionIndex]['answers'][i].value = e.target.value;
      return copy
  })
}

  const addAnswer = () => {
    if (newQuestions[questionIndex].answers.length >=6){
      return;
    }
    setNewQuestions(prev => {
     let newState = [...prev];
      newState[questionIndex].answers.concat({value: "", correct: false})
      return newState;
     })
  }

  const removeAnswer = (i) => {


  }

  return (
    <div className='add-answers-container'>
      <span className='num'>#{questionIndex + 1}</span>
      <input
      className='question-prompt-input'
      placeholder='New Question...'
      required
      value={newQuestions[questionIndex].prompt}
      onChange={e => handleChange(e)}
      >
      </input>

      <div className='answers-container'>

     { newQuestions[questionIndex]?.answers?.map( (answer, i) =>

     <div className='individual-answer' key={i}>

      <span>{letters[i]}.</span>
      <input
      type='text'
      placeholder='option'
      max='30'
      value={answer.value}
      onChange={e => handleAnswerChange(e, i)}
      ></input>
     {i > 0 &&
          <span className='remove-answer' onClick={ e => removeAnswer(i)}><i class="fas fa-times"></i></span>}
      </div>
     )}
      </div>
      <span className='add-answer-btn' onClick={addAnswer}>add choice</span>
      <button className=''>Add Question</button>
    </div>
  )
}

export default AddAnswers
