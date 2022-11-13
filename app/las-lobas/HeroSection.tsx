import React from 'react'

const HeroSection = () => {
  return (
    <header className="flex justify-center relative bg-aboutBanner bg-cover bg-center h-[600px] 2xl:h-[1000px]">
      <div className="flex z-20 flex-col lg:flex-row lg:justify-between max-w-screen-lg 2xl:max-w-screen-2xl mx-auto justify-center px-10 items-center">
        <div className="mx-auto z-20 px:8 lg:px-14">
          <h1 className="text-4xl lg:text-6xl text-center font-bold text-white text-shadow">
            Entrenadoras
          </h1>
          <p className="text-white text-center text-xl lg:text-2xl mt-5 rounded-md  border-2 border-lobxs p-app">
            Somos conscientes de lo complicado que es entrenar en solitario. Así
            que estamos aquí para entrenarte. Para empoderarte, impulsarte,
            acompañarte y llevarte hasta la cima. Para enseñarte a entrenar con
            cabeza y correr hacia a tus sueños. Somos seres inconformistas
            centradas exclusivamente en encumbrar tus metas.
          </p>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
