import React, { useState } from 'react'
import '../Quizzes/CreateQuiz.css'
import Question from './Question'
import QuestionTypes from './QuestionTypes'

const CreateQuestions = ({quiz, setCurrentQuiz}) => {
  const [create, setShowCreate] = useState(false)
  const [newQuestions, setNewQuestions] = useState([{prompt: "", type:"mc"},{prompt: "", type:"mc"}])

  const [showTypes, setShowTypes] = useState(false)
  const [type, setType] = useState("")

  const handleRemove = () => {
    setCurrentQuiz({})
  }

  const handleShow= () => {
    setShowCreate(true)
  }
  const handleHide= () => {
    setShowCreate(false)
  }

  return (
    <div className="create-question-container">
      <div className="side-bar">
      <div className="title-topic">
          <h2>{quiz.title}</h2>
          <p>{quiz.topic}</p>

          <span className="plus"
          onMouseOver={handleShow}
          onMouseLeave={handleHide}
          onClick={e => setShowTypes(true)}
          > <i class="fas fa-plus"> </i>

         { create && <>

        <span className="question-hover">add question</span> </>}
        </span>
        </div>
      {<span className="x" onClick={handleRemove}>cancel</span> }

      {showTypes &&
        <QuestionTypes setShowTypes={setShowTypes}/>
      }
      <div>
        {newQuestions.map( question =>
          <Question />

          )}
      </div>



      </div>
    </div>
  )
}

export default CreateQuestions
