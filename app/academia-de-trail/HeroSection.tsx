import Image from 'next/image'
import React from 'react'
import Button from '../../components/Button'
import MaiguaHero from '../../public/img/maigua-hero.png'

const HeroSection = () => {
  return (
    <header className="flex justify-center relative bg-academyBanner bg-cover bg-center h-[800px] bg-neutral">
      <div className="flex z-20 flex-col lg:flex-row lg:justify-between justify-center px-10 items-center">
        <div className="mx-auto z-20 px:8 lg:px-14">
          <h1 className="text-4xl lg:text-6xl text-center font-bold text-white text-shadow mt-20 lg:mt-0">
            Academia de Trail y Montaña
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-evenly items-center lg:mt-20 mt-10">
            <div className="-mt-10 lg:-mt-20 lg:order-1 order-2">
              <Image src={MaiguaHero} alt="Howl Hero" />
            </div>
            <div className="flex flex-col items-center lg:px-20 space-y-5  lg:order-2 order-1 lg:mt-10">
              <h2 className="text-white text-center font-bold text-2xl lg:text-3xl">
                Todo lo que debes conocer sobre entrenamiento{' '}
                <span className="text-lobxs">en montaña</span>
              </h2>
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white text-xl lg:text-2xl"
              >
                <a
                  href="https://pay.hotmart.com/G18854002R?checkoutMode=10"
                  target="_blank"
                >
                  Ver La Academia
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
