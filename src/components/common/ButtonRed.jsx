import React from 'react'

const ButtonRed = ({label, clickHandler, sizeClass}) => {
  return (
    <button type='button' className={`btn btn-error text-white ${sizeClass}`} onClick={clickHandler}>
      {label}
    </button>
  )
}

export default ButtonRed
