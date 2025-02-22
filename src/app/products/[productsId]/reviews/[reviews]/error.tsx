"use client"
import React from 'react'

const ErrorPage = ({error, reset}:{
  error: Error;
  reset : ()=> void;

}) => {
  return (
    <div> 
      <p>{error.message}</p>
      <button className='bg-green-600 px-3 py-1 rounded text-white ms-2' onClick={reset} >Try Again</button>
    </div>
  )
}

export default ErrorPage