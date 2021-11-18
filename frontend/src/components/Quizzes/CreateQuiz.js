import { useState, useRef } from "react"
import Select from 'react-select'
import './CreateQuiz.css'
import CreateQuestions from "./CreateQuestions"

const CreateQuiz = () => {

  // const [quizToCreate, setQuizToCreate] = useState({})
  const [ quizName, setQuizName] = useState('');
  const [ topic, setTopic] = useState('');

  const [currentQuiz, setCurrentQuiz] = useState({})

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
        const newQuiz = {title: quizName,
        topic
        }
        setCurrentQuiz(newQuiz)
        console.log(currentQuiz)
        setQuizName('');
        setTopic('');
      }else if( !quizName.length) {
        window.alert('You must provide a name.')
      } else if(!topic.length){
        window.alert('Please assign a topic.')
      }

  }


  return (

    <div className='create-quiz-page'>

     { !currentQuiz?.title &&
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

     { !!currentQuiz.title?.length &&
     <CreateQuestions quiz={currentQuiz} setCurrentQuiz={setCurrentQuiz}/>
     }


    </div>
  )
}

export default CreateQuiz
