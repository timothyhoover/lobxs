import Image from 'next/image'
import React from 'react'
import HowlHero from '../../public/img/howl-hero.png'

const HeroSection = () => {
  return (
    <header className="flex justify-center relative bg-sleepingWolf bg-cover bg-center h-[800px] 2xl:h-[1200px] bg-neutral">
      <div className="flex z-20 flex-col lg:flex-row lg:justify-between justify-center px-10 items-center">
        <div className="mx-auto z-20 px:8 lg:px-14">
          <h1 className="text-4xl lg:text-6xl text-center font-bold text-white text-shadow mt-20 lg:mt-0">
            Entrena con nosotrxs
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-evenly items-center lg:mt-20 mt-10">
            <div className="-mt-10 lg:-mt-20 lg:order-1 order-2">
              <Image src={HowlHero} alt="Howl Hero" />
            </div>
            <div className="text-center lg:px-20 space-y-5  lg:order-2 order-1">
              <h2 className="text-white font-bold text-2xl lg:text-5xl">
                Entrenamos…
              </h2>
              <div className="space-y-2">
                <p className="text-white lg:text-xl">
                  Entrenamos indistintamente a mujeres y hombres con ganas de
                  explorar sus límites. Amantes del deporte outdoor y la
                  naturaleza.
                </p>
                <p className="text-white lg:text-xl">
                  Gente inspiradora cuyo fondo humano nos inspire a nosotros
                  también.
                </p>
                <p className="text-white lg:text-xl">
                  Triatletas, corredorxs de trail y de asfalto, nadadorxs de
                  travesías y locxs expedicionarixs…
                </p>
                <p className="text-white lg:text-xl">
                  Nuestra motivación para entrenarte es únicamente llevar a la
                  cima tus sueños y explorar tus límites de manera saludable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
