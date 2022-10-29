import Image from 'next/image'
import React from 'react'
import WolfHero from '../assets/img/wolf-hero.png'
import HowlHero from '../assets/img/howl-hero.png'
import LatestVideo from './LatestVideo'

const WelcomeSection = () => {
  return (
    <section className="relative bg-trees bg-cover bg-center">
      <div className="bg-[#252525] lg:bg-transparent flex justify-center items-center relative w-full -mt-32 lg:-mt-28 px-10 after:content[''] after:bg-bottomSmudge after:bg-cover after:bg-center after:absolute after:left-0 after:w-full after:h-[475px] after:bg-no-repeat after:bottom-[-230px] after:z-10">
        <div className="flex flex-col lg:flex-row justify-evenly relative lg:justify-between items-center max-w-screen-lg 2xl:max-w-screen-2xl w-full">
          <div className="z-30 flex flex-col items-center">
            <Image src={WolfHero} />
            <p className="hidden lg:block text-white text-2xl lg:text-3xl mt-5">
              Entrenamientos / Academia
            </p>
          </div>
          <div className="flex flex-col justify-center lg:justify-end text-white lg:h-full -mb-5 lg:mb-0 my-10 z-30 px-10">
            <h2 className="text-white text-center font-bold text-5xl lg:text-7xl -mb-5">
              BIENVENIDX
            </h2>
            <h2 className="text-center ml-14 lg:ml-0 lg:text-right w-full text-lobxs font-bold text-5xl lg:text-7xl">
              LOBXS
            </h2>
            <p className="text-white text-lg lg:text-xl text-center">
              La aventura empieza junto a nosotras.
            </p>
            <p className="text-white text-lg lg:text-xl text-center">
              ¿Te unes?
            </p>
          </div>
          <div className="z-30 flex flex-col items-center">
            <Image src={HowlHero} />
            <p className="text-white text-2xl lg:text-3xl mt-5">
              Expediciones / Desafíos
            </p>
            <p className="block lg:hidden text-white text-2xl lg:text-3xl mt-5">
              Entrenamientos / Academia
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-24 px-app z-30 max-w-screen-lg 2xl:max-w-screen-2xl w-full mx-auto">
        <h3 className="text-6xl lg:text-8xl font-bold text-black text-shadow-white z-30">
          Últimos
        </h3>
        <h3 className="text-6xl lg:text-8xl font-bold text-shadow text-white ml-32 -mt-6 lg:-mt-8 z-30">
          Videos
        </h3>
        <LatestVideo />
        <LatestVideo />
        <LatestVideo />
        <LatestVideo />
      </div>
    </section>
  )
}

export default WelcomeSection
