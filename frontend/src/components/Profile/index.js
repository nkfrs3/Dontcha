import React, {useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router'
import { getMyQuizzes } from '../../store/quiz'
import DeleteQuiz from './DeleteQuiz'
import RecentActivity from './RecentActivity'
import {getUserQuizzes} from '../../store/quiz'

import './Profile.css'
const Profile = () => {
  const params = useParams()
  const profileId = params.id;
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)

  const myQuizzes = useSelector(state => state['quizzes'].mine)
  const history = useHistory();
  const [showDelete, setShowDelete] = useState(false);
  const [quizToDelete, setQuizToDelete] = useState(null);

  const [visitor, setVisitor] = useState(true);
  const [visitedUser ,setVisitedUser] = useState(null);

  const visitedQuizes = useSelector(state => state.quizzes.theirs)


  useEffect(() => {
    if (profileId == user.id){
      // dispatch(getMyQuizzes(profileId))
    } else if ( user.id && visitor) {
      dispatch(getUserQuizzes(profileId))
    }
  }, [dispatch])

  useEffect(()=> {
    console.log(visitor);
    if (user.id == profileId){
      setVisitor(false)
      dispatch(getMyQuizzes(user.id))
    } else if (user.id && user.id !== profileId){
      setVisitor(true);
      fetch(`/api/users/${profileId}`).then(res => res.json())
      .then(json => setVisitedUser(json))
    }
  }, [user, profileId])

    const formatDateAndTime = (date) => {
    const time = new Date(date).toLocaleTimeString('en');
    const timeArr = time.split(':')
    const timeStr = `${timeArr[0]}:${timeArr[1]} ${timeArr[2].slice(-2)}`
    const arr = date.split('-');
    const monthAndDay = `${arr[1]}/${arr[2].slice(0,2)}/${arr[0]}`
    return `${monthAndDay} ${timeStr.toLowerCase()}`;
    }

    const handleDelete = (quiz) => {
      setQuizToDelete(quiz)
      setShowDelete(true)

    }

    useEffect(() => {
      if (!showDelete) return;
      const closeModal = () => {
        setShowDelete(false);
      };
      document.addEventListener('click', closeModal);

      return () => document.removeEventListener("click", closeModal);
    }, [showDelete]);

    // const handleRedirect = (id) => {
    //   history.push(`/quizzes/${id}`)
    // }


  return (
    <div className='p-w'>

      <div className='profile-banner'>
        <span ><i class={user.profileIcon}></i></span>
       {visitedUser ? <h3>{visitedUser.username}</h3> : <h3>{user.username}</h3>}

      </div>
      <div className='r-a-b'>
    { visitedUser ? <h4 >Quizzes</h4> : <h4 >My Quizzes</h4>}

      <h4>Recent Activty</h4>
      </div>
      <div className='m-q-c'>

        <div className='my-quizzes-column'>
        { !visitor && myQuizzes.length > 0 && myQuizzes?.map(quiz =>

          <div className='m-q'>
            <div className='m-q-t' >
            <h6>{quiz.title}</h6>

            <span>-</span>
            <span>{quiz.topic}</span>
            </div>

          <div className='m-q-lower'>
            <span>{formatDateAndTime(quiz.createdAt)}</span>

            <div className='edit-delete'>
            <span>edit</span>
            <span className='delete-q' onClick={()=> handleDelete(quiz)}>delete</span>
            </div>

           </div>
          </div>

            )}
              {
            visitor && visitedQuizes.length > 0 &&


             visitedQuizes.map( quiz =>

            <div className='m-q visited-quiz' >
              <div className='m-q-t' >
                <h6>{quiz.title}</h6>

              <span>-</span>
              <span>{quiz.topic}</span>
              </div>

              <div className='m-q-lower'>
              <span>{formatDateAndTime(quiz.createdAt)}</span>

            </div>
          </div>
          )}
           {!visitor && myQuizzes.length == 0 &&
           <div className='no-quizzes'>
            <p>You haven't created any quizzes yet.</p>
          </div> }

          {visitor && visitedQuizes.length == 0 &&
           <div className='no-quizzes'>
            <p>They created any quizzes yet.</p>
          </div> }
        </div>





           {showDelete &&
            <DeleteQuiz quiz={quizToDelete} setShowDelete={setShowDelete} setQuizToDelete={setQuizToDelete}/>
            }


        <div className="rec-a">
        <RecentActivity userId={profileId}/>
        </div>

      </div>
    </div>
  )
}

export default Profile
