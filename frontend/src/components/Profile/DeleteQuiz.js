import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteQuiz } from '../../store/quiz'

const DeleteQuiz = ({quiz, setShowDelete, setQuizToDelete}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {

    dispatch(deleteQuiz(quiz.id))
      setShowDelete(false);
      setQuizToDelete(null);
  }


  return (
    <div onClick={e => e.stopPropagation()} className='delete-modal'>
      <h3>Are you sure you want to delete {quiz.title}?</h3>
      <button onClick={handleDelete}>YES</button>
    </div>
  )
}

export default DeleteQuiz
