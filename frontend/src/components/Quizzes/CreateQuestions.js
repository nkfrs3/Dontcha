import React, { useState } from 'react'
import './CreateQuiz.css'

const CreateQuestions = ({quiz, setCurrentQuiz}) => {
  const [create, setShowCreate] = useState(false)
  const [newQuestions, setNewQuestions] = useState({})
  const [showTypes, setShowTypes] = useState(false)

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
      {<span className="x" onClick={handleRemove}>X</span> }
        <span className="plus"
          onMouseOver={handleShow}
          onMouseLeave={handleHide}
        ><i class="fas fa-plus"></i>
         { create && <>
         <span className="arrow-left"></span><span className="question-hover">add question</span> </>}
        </span>



        {quiz.title} {quiz.topic}

      </div>
    </div>
  )
}

export default CreateQuestions
