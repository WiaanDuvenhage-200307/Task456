import React from 'react'
import ErrorIcon from '../Assets/error.svg';

const MiniModalLeft = (props) => {
  return (
    <div className='alertMiniModal'>
      <p>{props.message}</p>
      <img src={ErrorIcon} />
    </div>  
  )
}

export default MiniModalLeft
