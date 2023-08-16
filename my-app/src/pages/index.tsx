import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/store/counterSlice'
import { RootState } from '@/app/store';

export default function Page() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <h1>{count}</h1>
      </div>
    </div>
  )
}
