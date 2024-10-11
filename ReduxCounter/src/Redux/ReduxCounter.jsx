// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/CounterSlice';

export default function ReduxCounter() {
    const count = useSelector((state)=>{
        return state.counterkey
    })
    const dispatch = useDispatch();
  return (
    <>
    <h1>Counter</h1>
    <h1>{count.count}</h1>
    <button onClick={()=>{dispatch(increment())}}>+</button>
    <button onClick={()=>{dispatch(decrement())}}>-</button>
    </>
  )
}