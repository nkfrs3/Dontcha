import { useState, useRef } from "react"
import Select from 'react-select'
import './CreateQuiz.css'
import CreateQuestions from "../Question/CreateQuestions"

const CreateQuiz = () => {


  // const [quizToCreate, setQuizToCreate] = useState({})
  const [ quizName, setQuizName] = useState('');
  const [ topic, setTopic] = useState('');
  const [description, setDescription] = useState('')

  const [currentQuiz, setCurrentQuiz] = useState({})

  const options = [
    { value: 'movies', label: 'Movies' },
    { value: 'music', label: 'Music' },
    { value: 'video games', label: 'Video Games' },
    { value: 'tv-shows', label: 'TV-Shows' },
    { value: 'history', label: 'History' },
    {value: 'other', label: 'Other'}
  ]


  const handleSubmit = () => {

      if (quizName && topic){

        const newQuiz = {title: quizName,
        topic,
        }

        if (description){
          newQuiz['description'] = description;
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
        <div className='topic-name'>
        <label className="topics-menu">
          Topic
          <Select options={options} className="topics-menu"
          required
          onChange={e => setTopic(e.value) }
          className='topics-drop'
          />
        </label>
        <label className="quiz-name-label">
          Name
          <input type='text'
          placeholder="quiz name"
          value={quizName}
          max="40"
          required
          onChange={e => setQuizName(e.target.value)}
          ></input>
        </ label >
        </div>
        <label className="desc">
          Description
          <textarea
          placeholder="description - optional"
          value={description}
          max="400"
          onChange={e => setDescription(e.target.value)}
          className='desc-input'
          ></textarea>
        </ label >
        </div>
        </>
    }

     { !!currentQuiz.title?.length &&
     <CreateQuestions quiz={currentQuiz} setCurrentQuiz={setCurrentQuiz} setDescription={setDescription}/>
     }


    </div>
  )
}

export default CreateQuiz
