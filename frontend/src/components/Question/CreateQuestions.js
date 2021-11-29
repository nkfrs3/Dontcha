import React, { useState } from 'react'
import '../Quizzes/CreateQuiz.css'
import Question from './Question'
import QuestionTypes from './QuestionTypes'
import AddAnswers from './AddAnswers'
import { useSelector, useDispatch } from "react-redux";
import { postQuiz } from '../../store/quiz'
import PublishModal from '../Quizzes/PublishModal'
import { postQuestions } from '../../store/questions'
import { useHistory } from 'react-router'

const CreateQuestions = ({quiz, setCurrentQuiz ,setDescription}) => {
  const [create, setShowCreate] = useState(false)
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [newQuestions, setNewQuestions] = useState([
    {prompt: "", type:"mc", answers: [{value: "", correct: false}] }, { prompt: "", type:"mc", answers: [{value: "", correct: false}] } ])
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
  const [showTypes, setShowTypes] = useState(false)
  const [type, setType] = useState("mc") // this state should belong to the QuestionTypes.js component
  const [showAddAnswers, setShowAddAnswers] = useState(false);
  const [errors, setErrors] = useState('');
  const history = useHistory();
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)

  const handleRemove = () => {
    setDescription('')
    setCurrentQuiz({})
  }

  const handleShow= () => {
    setShowCreate(true)
  }
  const handleHide= () => {
    setShowCreate(false)
  }


  const publishQuiz = () => {

    if (  newQuestions.length < 2 ){
      setErrors('You must create atleast 2 questions.')
      return
    }if (  newQuestions.some(x =>  x.prompt.length <= 3 )){
        setErrors('You must enter a valid question.')
        return
    }if (newQuestions.some(q => q.answers.length <= 1 && q.type == 'mc')){
      setErrors('You must provide two answers for all questions.')
      return;
    }if ( newQuestions.some(q => q.answers.some(x => x['value'].length < 1))) {
      setErrors('Your answers must be valid.')
      return;
    }

    if ( !newQuestions.every(question => question['answers'].find(answer => answer['correct'] == true)) ){

      setErrors('You must provide a correct answer for each question.')
      return;
    }else {
        setErrors("")
        quiz.userId = user.id;
        const inserted = dispatch(postQuiz(quiz))
        .then(json =>  dispatch(postQuestions(json, newQuestions))).then(res => {
          if (user){
            history.push(`/profile/${user.id}`)
          }else {
            history.push(`/quizzes`)
          }
        }).catch(e => console.log(e))

        }
      }




  return (
    <>{errors && <div className="submission-err">{errors}</div> }
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

          <Question question={question} i={i}
          setNewQuestions={setNewQuestions}
          newQuestions={newQuestions}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
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

      <button className='publish' onClick={publishQuiz}>{ showPublishModal ? 'back' : 'publish' }</button>
     </div>



      </>
  )
}

export default CreateQuestions
