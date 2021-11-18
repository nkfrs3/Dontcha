import React, { useState } from 'react'
import '../Quizzes/CreateQuiz.css'
import Question from './Question'
import QuestionTypes from './QuestionTypes'
import AddAnswers from './AddAnswers'


const CreateQuestions = ({quiz, setCurrentQuiz}) => {
  const [create, setShowCreate] = useState(false)
  const [newQuestions, setNewQuestions] = useState([
    {prompt: "", type:"mc", answers: [{value: "", correct: false}] }, { prompt: "", type:"mc", answers: [{value: "", correct: false} ] } ])
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
  const [showTypes, setShowTypes] = useState(false)
  const [type, setType] = useState("mc") // this state should belong to the QuestionTypes.js component
    const [showAddAnswers, setShowAddAnswers] = useState(false);

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
    <>
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
        <QuestionTypes setShowTypes={setShowTypes} setType={setType} showTypes={showTypes} setNewQuestions={setNewQuestions} setShowAddAnswers={setShowAddAnswers} newQuestions/>
      }
      <div className="new-questions-column">

        {newQuestions.map( (question, i) =>

          <Question question={question} i={i} setNewQuestions={setNewQuestions} setCurrentQuestionIndex={setCurrentQuestionIndex}
          currentQuestionIndex={currentQuestionIndex}
          setShowAddAnswers={setShowAddAnswers}
          key={i}
          />

          )}
      </div>

      </div>
      {currentQuestionIndex !== null &&

        <AddAnswers
        newQuestions={newQuestions}
        setNewQuestions={setNewQuestions}
        // currentQuestion={currentQuestion}
        // setCurrentQuestion={setCurrentQuestion}
        questionIndex={currentQuestionIndex}
        />
      }

      <button className='publish'>publish</button>
     </div>



      </>
  )
}

export default CreateQuestions
