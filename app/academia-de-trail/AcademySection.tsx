import React from 'react'
import Button from '../components/Button'

const AcademySection = () => {
  return (
    <section className="relative bg-academyBackground bg-cover bg-center overflow-visible">
      <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-lg 2xl:max-w-screen-2xl mx-auto justify-center px-10 items-center h-[1200px] space-x-10 ">
        <div className="flex flex-col items-center w-full text-center">
          <h3 className="text-white font-bold text-6xl text-shadow">
            100 vídeos cortos sobre
          </h3>
          <h3 className="text-lobxs font-bold text-4xl text-shadow mt-3 mb-8">
            Seguridad, Orientación, Técnicas, Rendimiento...
          </h3>
          <Button
            variant="secondary"
            size="lg"
            className="text-white text-2xl border-white"
          >
            Entra Ya
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AcademySection
