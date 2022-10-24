import React from 'react'

const FeaturedVideoSection = () => {
  return (
    <section className="relative bg-valley bg-cover bg-top -mt-[500px]">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-center px-10 lg:px-20 items-center h-[1800px] space-x-10 pt-44">
        <embed
          className="border-4 border-white order-2 lg:order-1 lg:w-3/6 lg:h-[500px] w-full h-[600px]"
          src="https://www.youtube.com/embed/fB2u5VoGsjU"
        ></embed>
        <div className="order-1 lg:order-2 mb-10 lg:mb-0">
          <p className="text-black text-shadow-white font-medium text-4xl">
            Nuestro Objetivo
          </p>
          <p className="text-7xl lg:text-8xl font-bold text-white text-shado -mb-6">
            VISIBILIZAR
          </p>
          <p className="text-7xl lg:text-8xl font-bold text-lobxs text-shadow ml-10 -mb-6">
            LA ACCIÓN
          </p>
          <p className="text-7xl lg:text-8xl font-bold text-white text-shadow -mb-6">
            DEPORTIVA
          </p>
          <p className="text-7xl lg:text-8xl font-bold text-lobxs text-shadow ml-10">
            FEMENINA
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideoSection
