import React from 'react'
import Button from './components/Button'
import styles from '../styles/hero-section.module.css'
import Instagram from './components/icons/Instagram'
import Youtube from './components/icons/Youtube'

const HeroSection = () => {
  return (
    <>
      <header className="relative h-[700px] after:content[''] after:bg-heroSmudge after:absolute after:top-0 after:left-0 after:w-full after:h-[800px] after:bottom-[-195px] after:bg-auto after:z-10">
        {/* overlay */}
        <div className="absolute top-0 left-0 flex items-center justify-center h-[700px] w-full bg-black bg-opacity-40 z-10" />
        <div className="absolute left-0 flex flex-col items-center justify-center h-[700px] w-full px-8 lg:px-16 z-20">
          <div className="flex flex-col justify-center items-center w-full max-w-screen-md space-y-8 text-center lg:-mb-10">
            <h1 className="text-5xl lg:text-7xl text-white font-bold text-shadow">
              Persigue tu instinto
            </h1>
            <div className="w-full">
              <h2 className="text-base lg:text-2xl text-white">
                El mundo está lleno de mujeres lobo: salvajes e indómitas.
                Mujeres que con su acción están dejando una huella imborrable.
                Desde LOBXS potenciamos y visibilizamos su acción para que su
                inspirador aullido se escuche en todo el planeta.
              </h2>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                size="lg"
                variant="secondary"
                className="border-white text-white text-2xl h-16 px-10"
              >
                Conócenos
              </Button>
              <Instagram
                className="text-neutral hover:text-lobxs cursor-pointer transition-all ease-in-out duration-150"
                width={36}
                height={36}
              />
              <Youtube
                className="text-neutral hover:text-lobxs cursor-pointer transition-all ease-in-out duration-150"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
        <div className={styles.vimeoWrapper}>
          <iframe
            src="https://player.vimeo.com/video/722561004?muted=1&autoplay=1&loop=1&transparent=0&background=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </header>
    </>
  )
}

export default HeroSection

//            "after:content[''] after:bg-heroSmudge after:absolute after:top-0 after:left-0 after:w-full after:h-[800px] after:bottom-[-195px] after:bg-auto after:z-20"
