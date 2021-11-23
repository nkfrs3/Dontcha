import React from 'react'

const McAnswers = ({currentQuestion}) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  const handleAnswer = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className='ans-container'>


      {currentQuestion.answers.map((ans, i) =>
      <div className='ans'>
        <input type = 'radio' value={ans.value} name='answers'
        onChange={e => handleAnswer(e)}

        >

        </input>
        <span>{letters[i]}</span>
        <h4>{ans.value}</h4>

      </div>
      )}
    </div>
  )
}

export default McAnswers
