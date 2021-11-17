import { useState, useRef } from "react"
import Select from 'react-select'
import './CreateQuiz.css'


const CreateQuiz = () => {

  const [quizToCreate, setQuizToCreate] = useState({})
  const [ quizName, setQuizName] = useState('');
  const [ topic, setTopic] = useState('');
  const [errors, setErrors] = useState([])
  const currentQuiz = useRef({})

  const options = [
    { value: 'movies', label: 'Movies' },
    { value: 'music', label: 'Music' },
    { value: 'video games', label: 'Video Games' },
    { value: 'tv-shows', label: 'TV-Shows' },
    { value: 'history', label: 'History' },
  ]


  const handleSubmit = () => {

      if (quizName && topic){
        console.log('submitting')
        currentQuiz.current.title = quizName;
        currentQuiz.current.topic = topic;
        console.log(currentQuiz.current)
        setQuizName('');
        setTopic('');
      }else if( !quizName.length) {
        window.alert('You must provide a name.')
      } else if(!topic.length){
        window.alert('Please assign a topic.')
      }

  }

  const clearErrors = () => {
    if (errors.length && !currentQuiz.title){
      setErrors([])
    }
  }
  return (

    <div className='create-quiz-page'>

     { !currentQuiz.current.title && !currentQuiz.current.topic &&
      <>
      <button className='top' onClick={handleSubmit}>Create</button>
      <div className="create-quiz-form">
        <label className="topics-menu">
          Topic
          <Select options={options} className="topics-menu"
          required
          onChange={e => setTopic(e.value) }
          />
        </label>
        <label className="quiz-name-label">
          Name
          <input type='text'
          placeholder="quiz name"
          value={quizName}
          required
          onChange={e => setQuizName(e.target.value)}
          ></input>
        </ label >
        </div>
        </>
  }

      <CreateQuestions quiz={currentQuiz.current} />


    </div>
  )
}

export default CreateQuiz
