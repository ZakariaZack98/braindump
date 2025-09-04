import React from 'react'

const ButtonBlue = ({label, clickHandler, sizeClass}) => {
  return (
    <button type='button' className={`btn btn-primary ${sizeClass}`} onClick={clickHandler}>
      {label}
    </button>
  )
}

export default ButtonBlue
