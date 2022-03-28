import { Button } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'

import { QuizContext } from '../../../Context/QuizContext'
import './Result.css'

const Result = () => {

  const { score } = useContext(QuizContext)

  const [count,setCount]=useState(5)

  useEffect(() => {
    setTimeout(() => {
      window.location.replace('/')

    }, 5000)



  }, [])

  setInterval(() => {
    setCount(count-1)
  }, 1000);



  return (
    <div className='result'>
      Final Score : {score}

      <div>
        <span>00</span>
        <span>:</span>
        <span>0{count}</span>
      </div>

      <div>

        <Button variant='contained' color='secondary' onClick={()=>{
            window.location.replace('/')
        }} style={{ marginTop: '1rem' }}>Back</Button>
      </div>

    </div>
  )
}

export default Result