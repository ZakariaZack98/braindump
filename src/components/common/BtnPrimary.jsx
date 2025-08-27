import React from 'react'

const BtnPrimary = ({label, colorClass, clickHandler}) => {
  return (
    <button type='button' className={`px-6 py-2 rounded-2xl text-white ${colorClass}`} onClick={clickHandler}>{label}</button>
  )
}

export default BtnPrimary