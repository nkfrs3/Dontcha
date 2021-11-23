import React, {useEffect, useState} from 'react'
import './AddAnswers.css'
import Select from 'react-select'

const AddAnswers = ({questionIndex, setNewQuestions, newQuestions}) => {

  // let [answers, setAnswers] = useState([{value: "", correct: false}])
  const [options, setOptions] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [count, setCount] = useState(0);
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];



  useEffect(()=> {
    const arr = [];
    for (let i = 0; i <  newQuestions[questionIndex].answers.length; i++){
      arr.push({ value: letters[i].toLowerCase(), label: letters[i]})
    }
    setOptions(arr)
  }, [questionIndex, count])

const handleChange = (e) => {
    // setPrompt(e.target.value)

    setNewQuestions(prev => {
        let newState = [...prev]
        newState[questionIndex].prompt = e.target.value;

        return newState
         }
      )
  }

  const handleAnswerChange = (e, i) => {
    setCount(i => i+ 1)
    setNewQuestions(prev => {
      const copy = [...prev]

      copy[questionIndex]['answers'][i].value = e.target.value;
      return copy
  })
}

  const addAnswer = (e) => {
    e.stopPropagation()
    if (newQuestions[questionIndex].answers.length >=6) {
      return;
    }

    let c = [...newQuestions]
    c[questionIndex].answers.push({value: "", correct: false})

    setNewQuestions(c)
  }

  const removeAnswer = (i) => {
    let copy = [...newQuestions]
    copy[questionIndex]['answers'] = copy[questionIndex]['answers'].slice(0, i).concat(copy[questionIndex]['answers'].slice(i+1));

    setNewQuestions(copy)
  }

  const handleCorrect = (e) => {
    setCorrectAnswer(e.value);
    let index = (letters.indexOf(e.value.toUpperCase()))
    if (index !== -1) {
      let copy = [...newQuestions];
      copy[questionIndex]['answers'].map(ans => ans.correct = false)
      copy[questionIndex]['answers'][index]['correct'] = true;
      setNewQuestions(copy)
      // console.log(copy[questionIndex]['answers'][index]['correct'])
    }

  }

  return (
    <div className='add-answers-container'>
      <span className='num'>#{questionIndex + 1}</span>
      <div style={{display: 'none'}}>{count}</div>


      <Select
        className="correct-menu"
        options={options}
        required
        onChange={e => handleCorrect(e)}
          />
          <p>correct answer</p>
        <input
        className='question-prompt-input'
        placeholder='New Question...'
        required
        value={newQuestions[questionIndex]?.prompt}
        onChange={e => handleChange(e)}
        >
      </input>

      <div className='answers-container'>

     { newQuestions[questionIndex]?.answers?.map( (answer, i) =>

     <div className='individual-answer' key={i} style={{ backgroundColor : letters[i].toLowerCase() == correctAnswer ? 'rgb(6, 168, 6)' : 'white'}}>

      <span>{letters[i]}.</span>
      <input
      style={{ backgroundColor : letters[i].toLowerCase() == correctAnswer ? 'rgb(6, 168, 6)' : 'white'}}
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
    </div>
  )
}

export default AddAnswers
