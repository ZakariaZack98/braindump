import React from 'react'
import BtnPrimary from './BtnPrimary'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counters/counterSlice';

const CommonCounter = ({name}) => {
  const counter = useSelector(state => state.fruitCounter);
  const count = counter[counter.findIndex(fruit => fruit.name === name)].value || 0;
  const dispatch = useDispatch(); 

  const handleIncerement = () => {
    dispatch(increment({
      name
    }))
  }
  const handleDecerement = () => {
    dispatch(decrement({
      name
    }))
  }

  return (
    <div className='w-1/4 mx-auto h-30 flex flex-col gap-y-5 rounded-2xl bg-white text-black'>
      <p className='text-3xl text-center'>{name} counter</p>
      <div className="flex justify-center items-center gap-x-3">
        <BtnPrimary label={'Decrement'} colorClass={'bg-red-500'} clickHandler={handleDecerement}/>
        <span className='min-w-10 text-3xl flex justify-center'>{count}</span>
        <BtnPrimary label={'Increment'} colorClass={'bg-blue-500'} clickHandler={handleIncerement}/>
      </div>
    </div>
  )
}

export default CommonCounter