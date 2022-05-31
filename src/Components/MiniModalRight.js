import React from 'react'
import ErrorIcon from '../Assets/error.svg';

const MiniModalRight = (props) => {
  return (
    <div className='alertMiniModalRight'>
        <img src={ErrorIcon} />
        <p>{props.message}</p> 
    </div>
  )
}

export default MiniModalRight
