import { useState, useEffect } from 'react'

const Question = ({question, i, setNewQuestions, setCurrentQuestion}) => {


  const [showModal, setShowModal] = useState(false)

  const logo = {
    mc: `far fa-check-circle`,
    tf: `fas fa-yin-yang`,
    mw: `fas fa-pencil-alt`
  }

  const showRemove = (e) => {
    e.stopPropagation()
    if (!showModal){
      setShowModal(true)
    }
  }

  const handleSetQ = () => {
    question.index = i;
    setCurrentQuestion(question)
    console.log(question)
  }

  return (
    <>
    <div className ='questions-added' onClick={handleSetQ}>
      <div className ="type-counter">
        <span>
        <i className={logo[question.type]}></i>
        </span>
        <span>{i}</span>
      </div>

      <p>{ question.prompt ? question.prompt : "New Question."}</p>

      {/* <span className='add-answers-button'>add answers</span> */}
      <span className='elipsis' onClick={e => showRemove(e)}><i class="fas fa-ellipsis-v"></i></span>

      </div>
    {showModal &&
      <RemoveQuestion i={i} setNewQuestions={setNewQuestions} showModal={showModal} setShowModal={setShowModal} />
      }

      </>
  )
}

const RemoveQuestion= ({i, setNewQuestions, showModal, setShowModal}) => {

  useEffect(() => {
    const closeModal = () => {
      setShowModal(false);
    };
    document.addEventListener('click', closeModal);
    return () => document.removeEventListener("click", closeModal);
  }, []);

  const handleDelete = () => {
    setNewQuestions(prev => prev.slice(0, i).concat(prev.slice(i+1))
      )
  }

  return (
    <div className='remove-question-modal'>
      <h3>Remove Question {i + 1}</h3>
      <div onClick={handleDelete}>Delete</div>
    </div>
  )
}
export default Question
