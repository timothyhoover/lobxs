import Image from 'next/image'
import React from 'react'
import Veronica from '../../public/img/veronica.jpeg'
import Maigua from '../../public/img/maigua.jpeg'

const AboutSection = () => {
  return (
    <section className="relative">
      <div className="h-full max-w-screen-lg 2xl:max-w-screen-2xl mx-auto z-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center px-10">
          <div className="w-3/6 z-20 lg:order-1 order-2">
            <Image src={Veronica} alt="veronica" />
          </div>
          <div className="order-2 lg:order-1">
            <h2 className="text-6xl font-bold mb-5">Verónica Vallejo</h2>
            <ul className="text-black text-xl font-serif font-light space-y-3">
              <li>
                Graduada en Ciencias de la Actividad Física y el Deporte,
                especializada en Atletismo y entrenamiento de fuerza.
              </li>
              <li>Postgrado en Entrenamiento Personal.</li>
              <li>NSCA Certified Personal Trainer.</li>
              <li>
                Especialista en entrenamiento para la mujer (embarazo,
                postparto, suelo pélvico…).
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center mt-14 px-10">
          <div className="order-2 lg:order-1">
            <h2 className="text-6xl font-bold mb-5">Maigua Ojeda</h2>
            <ul className="text-black text-xl font-serif font-light space-y-3">
              <li>
                Graduada en Ciencias de la Actividad Física y el Deporte,
                especializada en Salud, UCLM.
              </li>
              <li>Máster en investigación en deporte adaptado por la UAM.</li>
              <li>Máster en dirección y creación de eventos deportivos.</li>
              <li>Guía de media montaña por la FMM</li>
              <li>
                Especialista en entrenamiento de atletismo, trail y montaña.
              </li>
            </ul>
          </div>
          <div className="w-3/6 z-20 order-1 lg:order-2">
            <Image src={Maigua} alt="maigua" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
