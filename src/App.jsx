import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Home from './pages/home/Index';


const App = () => {
  const counter = useSelector(state => state.fruitCounter);

  const sum = counter.map(item => item.value).reduce((a,b) => a+b);

  return (
    <div className='font-poppins'>
      <Home/>
    </div>
  )
}

export default App