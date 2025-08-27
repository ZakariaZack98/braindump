import React from 'react'
import CommonCounter from './components/common/commonCounter'
import { useSelector } from 'react-redux'

const App = () => {
  const counter = useSelector(state => state.fruitCounter);
  const sum = counter.map(item => item.value).reduce((a,b) => a+b);

  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-center gap-y-7'>
      <CommonCounter name={'apple'} />
      <CommonCounter name={'banana'} />
      <CommonCounter name={'orange'} />
      <div className='w-1/4 mx-auto px-2 text-center bg-white text-black'>
        <p className='text-3xl'>Total is: {sum}</p>
      </div>
    </div>
  )
}

export default App