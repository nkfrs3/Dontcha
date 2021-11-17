import React from 'react'

const CreateQuestions = ({quiz}) => {

const clearQuiz = () => {
  quiz['title'] = "";
  quiz['topic']= "";
}

  return (
    <div>
      <div className="side-bar">
        {quiz.title}
        {<span onClick={clearQuiz}>X</span>  }
      </div>
    </div>
  )
}

export default CreateQuestions
