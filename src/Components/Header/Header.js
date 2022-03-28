import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="title">
            <Link to='/'>Intitutive Quiz Hub</Link>
            
        </div>
        <hr />

    </div>
  )
}

export default Header