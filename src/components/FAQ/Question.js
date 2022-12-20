import React from 'react'
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from 'react';

const Question = ({title, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const handleClick = () => {
        setShowAnswer(!showAnswer);
      };
    
    return (
        <div className='question'>
            <div className='question-title'>
              <div className='fortitle'>
                     <p>{title}</p>
              </div>
               
                <button className='question-butt' onClick={handleClick}>
                    {showAnswer? (<AiOutlineMinus className='text-danger' size={30}/>): (<AiOutlinePlus className='text-success' size={30}/>)}
                </button>
            </div>

            <div className='ans'>
                {showAnswer && <p>{answer}</p>}
            </div>
            
        </div>
    )
}

export default Question
