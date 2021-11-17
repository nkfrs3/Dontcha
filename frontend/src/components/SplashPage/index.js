import { useState } from 'react'
import LoginForm from '../LoginForm'
import SignUpForm from '../SignupFormPage'
import './SplashPage.css'


const SplashPage = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="splash-page">
      <h1>Dontcha Know?</h1>
      <p>The place to create and participate in various travia challenges.</p>
     {!showLogin && <SignUpForm />}
     {showLogin && <LoginForm />}

      <span onClick={(e) => {e.stopPropagation(); setShowLogin(!showLogin)}}>{showLogin ? 'Sign Up' : 'Log In'}</span>
    </div>
  )
}

export default SplashPage
