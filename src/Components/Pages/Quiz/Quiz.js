import { Button } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../../../Context/QuizContext'
import './Quiz.css'
import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { handleSuffle } from '../../config/helper'
import ErrorMessage from '../../ui/ErrorMessage'

const Quiz = () => {

    const quizInfo = JSON.parse(sessionStorage.quizInfo)

    

    const { questions,score, setScore } = useContext(QuizContext)

    const history = useHistory()

    const [selected, setSelected] = useState(false)

    const [options, setOptions] = useState()

    const [currentQues, setCurrentQues] = useState(0)

    const [error,setError]=useState(false)

    const optionRef=useRef()

    


    const handleOptions=()=>{
        setOptions(questions && handleSuffle([questions[currentQues].correct_answer, ...questions[currentQues].incorrect_answers]))

    }


    useEffect(() => {
        
        
        handleOptions()
        
        // eslint-disable-next-line
    }, [questions,currentQues])

    


    const handleSelection=(e)=>{

        if(!(questions[currentQues].correct_answer===e.target.innerText)){
            e.target.style.backgroundColor='red'
            e.target.style.color='white'
        }

        else{
            setScore(score+1)
        }

        let buttons = document.querySelectorAll('.option')

        buttons.forEach((_,i)=>{
            if(buttons[i].innerText===questions[currentQues].correct_answer){
                buttons[i].style.backgroundColor='green'
                buttons[i].style.color='white'
                
                
                
            }
            
        })


        setSelected(true)
    }

    const handleNext = () => {

        if(!selected){
            setError(true)
            return;
        }

        let buttons = document.querySelectorAll('.option')        

        buttons.forEach((_, i) => {
            buttons[i].style.backgroundColor = ''
            buttons[i].style.color = ''
        })

        setSelected(false)

        setCurrentQues(currentQues + 1)



    }

    if(currentQues>8){
        history.push('/result')
        
    }

    if (!questions) {
        return (
            <p style={{ textAlign: 'center' }}>Loading...</p>
        )
    }


    return (
        <div className='quiz'>
            <div className="greeting">
                Welcome, {quizInfo.name}
            </div>
            <div className='quiz-info'>
                <div className="category">
                    {questions[currentQues].category}
                </div>
                <div className="score">
                    Score:{score}
                </div>

            </div>

            <div className='question-section'>
                <h2>Question {currentQues + 1}:</h2>
                <div className='question-control'>
                    <h2 className='heading'>{questions[currentQues].question}</h2>
                    {error && <ErrorMessage>Please Select One Option!🙄</ErrorMessage>}
                    <div className="options">
                        

                        {options?.map((option,index)=>{
                            return(
                                <button ref={optionRef} disabled={selected} onClick={(event)=>{
                                    handleSelection(event)
                                }} className='option' key={index}>{option}</button>
                            )
                        })}
                    </div>
                </div>
                <div className='actions'>
                    <Button variant='contained' color='secondary'>Quit</Button>
                    <Button variant='contained' color='primary' onClick={handleNext}>Next Question</Button>
                </div>
            </div>



        </div>
    )
}

export default Quiz