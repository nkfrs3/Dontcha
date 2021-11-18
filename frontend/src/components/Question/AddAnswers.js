import React, {useState} from 'react'
import './AddAnswers.css'
const AddAnswers = ({currentQuestion, setCurrentQuestion}) => {
// const [prompt, setPrompt] = useState(currentQuestion.prompt)

const handleChange = (e) => {
    // console.log(e.target.value)
    // setPrompt(e.target.value)

    setCurrentQuestion(prev =>  e.target.value )

    // setCurrentQuestion(prev => {
    // const newState = { ...prev }
    // console.log(prev)
    // return newState.prompt = e.target.value;

    // })
  }

  return (
    <div className='add-answers-container'>
      Helllo from answers

      <input
      value={currentQuestion?.prompt}
      onChange={e => handleChange(e)}
      >
      </input>
    </div>
  )
}

export default AddAnswers
