import React from 'react'
import './SideBar.css'
const QuestionTypes = ({setShowTypes}) => {
  return (
    <div className="types-modal">
      <h2>Question Types</h2>

       <div className="line"></div>

      <div className='topic-options'>
        <span>
          <div className='type-icon'><i class="far fa-check-circle"></i>
          </div>Multiple Choice
          </span>
          <span>
          <div className='type-icon'>
             <i class="fas fa-yin-yang"></i>
          </div>True/False</span>
          <span>
          <div className='type-icon'>
            <i class="fas fa-pencil-alt"></i>
            </div>Match Word
            </span>

      </div>
    </div>
  )
}

export default QuestionTypes
