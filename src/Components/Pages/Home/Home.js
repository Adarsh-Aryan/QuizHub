import { Button, MenuItem, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { QuizContext } from '../../../Context/QuizContext'
import Categories from '../../../Data/Category'
import Banner from '../../../images/quiz.svg'
import ErrorMessage from '../../ui/ErrorMessage'
import './Home.css'

const Home = () => {

    
    const {name,setName,fetchQuestions}= (useContext(QuizContext))

    const [category,setCategory]=useState('')

    const [difficulty,setDifficulty]=useState('')

    const [error,setError]=useState(false)

    const history= useHistory()

    const handleSubmit=()=>{

        

        if(!name || !category || !difficulty){
            setError(true)
            return
        }

        fetchQuestions(category,difficulty)

        sessionStorage.setItem('quizInfo',JSON.stringify({name,category,difficulty}))

        history.push('/quiz')
         
    }

    return (
        <div className='home'>
            <div className="quiz_settings">
                <h1>Quiz Settings</h1>
                {error && <ErrorMessage>Please Fill All The Fields</ErrorMessage>}
                <TextField variant='outlined' label='Name' style={{margin:'1rem 0rem'}} 
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}

                    value={name}

                 />
                <TextField select label='Category' variant='outlined' onChange={(e)=>{
                    setCategory(e.target.value)

                }}
                value={category}
                >

                    {Categories.map((item, index) => {
                        return (
                            <MenuItem key={index} value={item.value}>{item.category}</MenuItem>
                        )
                    })}

                </TextField>
                <TextField select variant='outlined' label='Difficulty' style={{margin:'1rem 0rem'}}
                onChange={(e)=>{
                    setDifficulty(e.target.value)
                }}
                value={difficulty}
                >

                    <MenuItem value='easy'>
                        Easy
                    </MenuItem>
                    <MenuItem value='medium'>
                        Medium
                    </MenuItem>
                    <MenuItem value='hard'>
                        Hard
                    </MenuItem>

                </TextField>
                <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>Submit</Button>
            </div>

            <img src={Banner} alt="banner" />

        </div>
    )
}

export default Home