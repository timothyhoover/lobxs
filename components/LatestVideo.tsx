import React from 'react'
import { Button } from './Button'

const LatestVideo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full max-w-6xl py-10 border-b border-black z-30 lg:space-x-10">
      <embed
        className="border-4 border-black w-full h-[300px]"
        src="https://www.youtube.com/embed/fB2u5VoGsjU"
      ></embed>
      <div className="flex flex-col justify-between space-y-3 pt-5 lg:pt-0">
        <p className="text-3xl lg:text-5xl">
          LO QUE HICIMOS EN SABLES I (De la anorexia a las ultras... nuestra
          historia)
        </p>
        <p className="font-medium text-black text-xl lg:text-2xl">
          Mar 8, 2020
        </p>
        <Button
          customClasses="border-black text-black w-3/6"
          variant="secondary"
          size="lg"
        >
          Ver Video
        </Button>
      </div>
    </div>
  )
}

export default LatestVideo
