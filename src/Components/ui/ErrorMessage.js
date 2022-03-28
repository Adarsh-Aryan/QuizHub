import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div style={{
        marginTop:'1rem',
        backgroundColor:'orange',
        textAlign:'center',
        padding:'1rem',
        fontSize:'1.2rem',
        fontWeight:'bold'
    }}>
        {children}
    </div>
  )
}

export default ErrorMessage