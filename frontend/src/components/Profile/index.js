import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMyQuizzes } from '../../store/quiz'

import './Profile.css'
const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const myQuizzes = useSelector(state => state['quizzes'].mine)

  useEffect(() => {
    dispatch(getMyQuizzes(user.id))
  }, [dispatch])

    const formatDateAndTime = (date) => {
    const time = new Date(date).toLocaleTimeString('en');
    const arr = date.split('-');
    const monthAndDay = `${arr[1]}/${arr[2].slice(0,2)}/${arr[0]}`
    return `${monthAndDay} ${time.toLowerCase()}`;
    }

    const colums = [{}]

  return (
    <div className='p-w'>
      <div className='profile-banner'>
        <span ><i class={user.profileIcon}></i></span>
        <h3>{user.username}</h3>

      </div>
      <div className='r-a-b'>
      <h4 >My Quizzes</h4>
      <h4>Recent Activty</h4>
      </div>
      <div className='m-q-c'>
        {myQuizzes.length && myQuizzes?.map(quiz =>
          <div className='m-q'>
            <div className='m-q-t'>
            <h6>{quiz.title}</h6>
            <span>{quiz.questions.length}</span>
            </div>
            <span>{quiz.topic}</span>
            <span>{formatDateAndTime(quiz.createdAt)}</span>
          </div>
        )}
        <div className="rec-a">
        </div>

      </div>
    </div>
  )
}

export default Profile
