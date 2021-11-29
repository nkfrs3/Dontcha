import React from 'react'
import { useState, useEffect } from 'react'
import './SideBar.css'
const QuestionTypes = ({setShowTypes, setType, showTypes, setNewQuestions, newQuestions}) => {

  useEffect(() => {
    const closeModal = () => {
      if (!showTypes )return
      setShowTypes(false);
    };
    document.addEventListener('click', closeModal);
    return () => document.removeEventListener("click", closeModal);
  }, []);

  const addQuestion = (type) => {
    if (newQuestions.length >= 10){
      window.alert("sorry, no more than 10 questions aloud")
      return;
    }
    if (type == 'mc') {
      const newQ = {prompt: "", type, answers: [{value: "", correct: false}]}
      setNewQuestions(prev => [...prev, newQ])
    }
    else if (type == 'tf') {
      const newQ = {prompt: "", type, answers: [{value: "t", correct: false}, {value: "f", correct: false}]}
      setNewQuestions(prev => [...prev, newQ])
    }else if (type == 'mw') {
      {
        const newQ = {prompt: "", type, answers: [{value: "", correct: true}]}
        setNewQuestions(prev => [...prev, newQ])
      }
    }

    setShowTypes(false)
  }

  return (
    <div className="types-modal" onClick={e => e.stopPropagation()}>
      <h2>Question Types</h2>

       <div className="line1"></div>

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
