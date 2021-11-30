import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom';
import { getQuizzes } from '../../store/quiz';
import Select from 'react-select'
import './quiz.css'

const Quizzes = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const quizzes = useSelector(state => Object.values(state.quizzes.all))
  const [loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState([])

  const getCount = (quiz) => {
    return quiz.questions.length;
  }

  useEffect(() => {
    if (!loaded) return
    else {
      setSelected(quizzes)
    }
  }, [loaded])

  useEffect( ()=> {
    if (!loaded || !quizzes)
    dispatch(getQuizzes()).then(res => setLoaded(true))
  },[])

  const options = [
    { value: 'all', label: 'All' },
    { value: 'movies', label: 'Movies' },
    { value: 'music', label: 'Music' },
    { value: 'video games', label: 'Video Games' },
    { value: 'tv-shows', label: 'TV-Shows' },
    { value: 'history', label: 'History' },
    { value: 'other', label: 'Other' }
  ]


  const handleClick = (quizId) =>  {
    history.push(`quizzes/${quizId}`);
}

const handleSelect = (e) => {

  if (e.value == 'all'){
    setSelected(quizzes)
  }else {
    let filtered = quizzes.filter(quiz => quiz.topic == e.value)
    setSelected(filtered)
  }

}

  return (
    <div className='ex-c'>
        <div className='t-side'>
          <Select options={options}
          placeholder="topics"
          onChange={ e => handleSelect(e)}
          className='ex-s' />
        </div>
        <div className='tst'></div>
        <div className='tst2'></div>
         <div className='quizzes-container' >
        {
       selected.map(quiz =>

        <div key={quiz.id} className='quiz-container' >

          <div >
          <h2>{quiz.title}</h2>
          <span className='top-right'><p>no. questions </p>{getCount(quiz) ? getCount(quiz) : ""}</span>
          </div>
          <div >
            <div className="top-tak">
            <span>{quiz.topic}</span>

            <span
              className='take'
              onClick={ e => {e.stopPropagation();
              handleClick(quiz.id)} }>take</span>
            </div>
          </div>

        </div>
        )

        }
    </div>
    </div>
  )
}

export default Quizzes
