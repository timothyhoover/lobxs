import React, { CSSProperties } from 'react'
import Image from 'next/image'
import Wolf from '../public/img/wolf.png'
import Button from '../components/Button'

const style = {
  height: 'auto',
  width: '100%'
} as CSSProperties

const JoinUsSection = () => {
  return (
    <section className="bg-neutral">
      <div className="flex flex-col lg:flex-row items-center justify-center px-10 max-w-screen-lg 2xl:max-w-screen-2xl mx-auto space-y-5 lg:space-y-0 py-10">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl lg:text-6xl w-full mb-5 lg:leading-[1.2] text-center">
            ÚNETE A UN MOVIMIENTO LLENO DE PASIÓN Y DE VIDA.
          </h3>
          <Button variant="secondary" size="lg">
            Únite a Nosotrxs
          </Button>
        </div>
        <div className="flex justify-center">
          <Image src={Wolf} alt="wolf" style={style} />
        </div>
      </div>
    </section>
  )
}

export default JoinUsSection
