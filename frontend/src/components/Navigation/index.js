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
      <NavLink to="/" className='app-title' activeClassName="home">Dontcha Know</NavLink>

      { currentUser &&
      <NavLink to='/create' activeClassName="home">create</NavLink>
      }
      {currentUser && <h2 className='welcome'>{currentUser?.username}</h2>}

    {!currentUser && <span className='demo nav-link' onMouseUp={handleDemo} >Demo</span>}

      {currentUser && <ProfileButton user={currentUser}/>}
    </div>
  )
}


export default Navigation;
