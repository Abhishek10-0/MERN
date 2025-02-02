import React from 'react'

function container({Children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
    {Children}
    </div>
  )
}

export default container