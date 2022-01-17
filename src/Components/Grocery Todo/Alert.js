import React from 'react'
import './grocery.css'

function Alert({message,type}) {
    return (
        <div className='alert'>
        <span className={`alert-${type}`}>  {message}</span>
        </div>
    )
}

export default Alert
