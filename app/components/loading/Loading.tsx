import React from 'react'
import Spinner from './Spinner'

const Loading = () => {
  return (
    <div className="flex justify-center py-10 h-screen bg-neutral">
      <Spinner className="w-20 h-20" />
    </div>
  )
}

export default Loading
