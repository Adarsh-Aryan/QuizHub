import axios from "axios";
import { useState } from "react";
import { QuizContext } from "./QuizContext";

const QuizState=({children})=>{

    const [name,setName]=useState('')
    const [questions,setQuestions]=useState()
    const [score,setScore]=useState(0)

    const fetchQuestions=async(category,difficulty)=>{
        const {data}= await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)

        

        setQuestions(data.results)
    }

    

    const context={
        name,
        setName,
        fetchQuestions,
        questions,
        score,
        setScore
        
    }

    return(
        <QuizContext.Provider value={context}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizState