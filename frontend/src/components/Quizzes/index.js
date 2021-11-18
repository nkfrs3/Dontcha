import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom';
import { getQuizzes } from '../../store/quiz';
import './quiz.css'

const Quizzes = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const quizzes = useSelector(state => Object.values(state.quizzes.all))
  const [loaded, setLoaded] = useState(false);

  useEffect( ()=> {
    dispatch(getQuizzes())
  },[])

  // useEffect(()=> {
  //   if (!loaded && quizzes.length){
  //     setLoaded(true)
  //   }
  // }, [quizzes])


  const handleClick = (quizId) =>  {
    history.push(`quizzes/${quizId}`);
}


  return (
    <div className='quizzes-container'>
        Hey From Quizzes
        {
       quizzes.map(quiz =>

        <div key={quiz.id} onClick={ e => {
        e.stopPropagation();
        handleClick(1)}} className='quiz-container' >
          <h2>{quiz.title}</h2>
          <span>{quiz.topic}</span>
          <span>{quiz.id}</span>
        </div>
        )
        }
    </div>
  )
}

export default Quizzes
