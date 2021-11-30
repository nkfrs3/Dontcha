import { useState, useEffect } from 'react'
import LoginForm from '../LoginForm'
import SignUpForm from '../SignupFormPage'
import './SplashPage.css'


const SplashPage = () => {

  const [showLogin, setShowLogin] = useState(false)
  const colors = ['red', 'pink', 'blue', 'purple', 'yellow', 'green', 'cyan'];

  const getRandomPos = () => {
    return `${Math.floor(Math.random() * (100))}%`
  }

  const getRandomColor = () => {
    let color = colors[Math.floor(Math.random() * (7))]
    console.log(color)
    return color;
  }
  const getRandomSize = () => {
    let size = Math.floor(Math.random() * (26) + 2)
    return `${size}rem`
  }

  const getRandomDeg = () => {
    let degree = Math.floor(Math.random() * (360))
    return `rotate(${degree}deg)`;
  }

  useEffect(() => {
    console.log(getRandomColor(), getRandomPos(), getRandomSize(), getRandomDeg())
  }, [])
  return (
    <div className="splash-page">
      <h1>Dontcha Know?</h1>
      <p>The place to create and participate in various travia challenges.</p>
     {!showLogin && <SignUpForm />}
     {showLogin && <LoginForm />}

      <span onClick={(e) => {e.stopPropagation(); setShowLogin(!showLogin)}} className='either-or'>{showLogin ? 'Sign Up' : 'Log In'}</span>

      <div className='question-marks'>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      <span style={{top: getRandomPos(), left: getRandomPos(), color: getRandomColor(), fontSize: getRandomSize(), transform: getRandomDeg() }}>
        ?
      </span>
      </div>
    </div>
  )
}

export default SplashPage
