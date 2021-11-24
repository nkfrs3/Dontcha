import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import { NavLink } from "react-router-dom";
import { signUp } from "../../store/session";
import Search from "./Search";
import './navigation.css'


const Navigation = ({isLoaded}) => {

  const dispatch = useDispatch();



  const currentUser = useSelector(state => state.session.user);

  const handleDemo = async () => {
    let num = Math.floor(Math.random() * 999);
    const demoUser ={username: `Visitor${num}`, email: `visitor@enlite${num}.com`, password: 'password'}
    // setDemoCount(prev => prev + 1);
    const demo = await dispatch(signUp(demoUser))
  }

  return (
    <div className="nav-bar">
      <NavLink to="/" className='app-title' activeClassName="current-link">Dontcha Know</NavLink>

      { currentUser &&
      <>
       <NavLink to='/quizzes' activeClassName="current-link">quizzes</NavLink>
       <NavLink to='/create' activeClassName="current-link">create</NavLink>
      </>
      }

      <div className ="profile-nav">
      {currentUser && <h2 className='welcome'>{currentUser?.username}</h2>}

    {!currentUser && <span className='demo nav-link' onMouseUp={handleDemo} >Demo</span>}

      {currentUser && <ProfileButton user={currentUser}/>}
      </div>
    </div>
  )
}


export default Navigation;
