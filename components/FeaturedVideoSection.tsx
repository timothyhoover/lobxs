import React from 'react'

const FeaturedVideoSection = () => {
  return (
    <section className="relative bg-mountains bg-cover bg-center overflow-visible -mt-[475px]">
      <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-lg 2xl:max-w-screen-2xl mx-auto justify-center px-10 lg:px-0 items-center h-[1800px] space-x-10 pt-44 after:content[''] after:bg-whiteSmudge after:bg-cover after:bg-center after:absolute after:left-0 after:bottom-0 after:w-full after:h-[475px] after:bg-no-repeat after:z-10">
        <embed
          className="border-4 border-white order-2 lg:order-1 max-w-3xl w-full h-[600px]"
          src="https://www.youtube.com/embed/fB2u5VoGsjU"
        ></embed>
        <div className="order-1 lg:order-2 mb-10 lg:mb-0">
          <p className="text-black text-shadow-white font-medium text-2xl lg:text-4xl">
            Nuestro Objetivo
          </p>
          <p className="text-6xl lg:text-8xl font-bold text-white text-shado -mb-4 lg:-mb-6">
            VISIBILIZAR
          </p>
          <p className="text-6xl lg:text-8xl font-bold text-lobxs text-shadow ml-10 -mb-4 lg:-mb-6">
            LA ACCIÓN
          </p>
          <p className="text-6xl lg:text-8xl font-bold text-white text-shadow -mb-4 lg:-mb-6">
            DEPORTIVA
          </p>
          <p className="text-6xl lg:text-8xl font-bold text-lobxs text-shadow ml-10">
            FEMENINA
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideoSection
