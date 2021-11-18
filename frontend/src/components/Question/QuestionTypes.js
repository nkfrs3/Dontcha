import React from 'react'
import { useState, useEffect } from 'react'
import './SideBar.css'
const QuestionTypes = ({setShowTypes, setType, showTypes, setNewQuestions}) => {

  useEffect(() => {
    const closeModal = () => {
      if (!showTypes )return
      setShowTypes(false);
    };
    document.addEventListener('click', closeModal);
    return () => document.removeEventListener("click", closeModal);
  }, []);

  const addQuestion = (type) => {
    const newQ = {prompt: "", type}
    setNewQuestions(prev => [...prev, newQ])
    console.log('adding question', newQ);
    setShowTypes(false)
  }

  return (
    <div className="types-modal" onClick={e => e.stopPropagation()}>
      <h2>Question Types</h2>

       <div className="line"></div>

      <div className='topic-options'>
        <span
        className='each-type'
        onClick={e => addQuestion('mc')}>
          <div className='type-icon'><i class="far fa-check-circle"></i>
          </div>Multiple Choice
          </span>
          <span
          className='each-type'
          onClick={e => addQuestion('tf')}>
          <div className='type-icon'>
             <i class="fas fa-yin-yang"></i>
          </div>True/False</span>
          <span
          className='each-type'
          onClick={e => addQuestion('mw')}>
          <div className='type-icon' >
            <i class="fas fa-pencil-alt"></i>
            </div>Match Word
            </span>

      </div>
    </div>
  )
}

export default QuestionTypes
