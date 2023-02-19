import Image from 'next/image'
import React from 'react'
import Veronica from '../../public/img/veronica.jpeg'
import Maigua from '../../public/img/maigua.jpeg'
import Instagram from '../components/icons/Instagram'
import Youtube from '../components/icons/Youtube'
import WebWindow from '../components/icons/WebWindow'

const AboutSection = () => {
  return (
    <section className="relative py-10">
      <div className="h-full max-w-screen-lg 2xl:max-w-screen-2xl mx-auto z-20">
        <div className="flex flex-col lg:flex-row justify-evenly items-center px-10">
          <div className="w-4/6 z-20 lg:order-1 order-2">
            <Image src={Veronica} alt="veronica" />
          </div>
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-6xl text-center lg:text-left font-bold mb-5">
              Verónica Vallejo
            </h2>
            <ul className="text-black text:lg lg:text-xl font-serif font-light space-y-3">
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
            <p className="text-black font-bold text-lg lg:text-xl mt-3">
              Mira mi programa de{' '}
              <a
                className="text-lobxs underline"
                target="_blank"
                href="https://hotmart.com/es/marketplace/productos/gana-fuerza-y-mejora-en-la-carrera-en-12-semanas/U39589355L"
              >
                fuerza
              </a>{' '}
              💪🏽
            </p>
            <Instagram className="hover:text-lobxs hover:cursor-pointer text-black my-5 text-2xl w-6 h-6" />
            <q className="text-neutral-contrast-light font-serif italic">
              Si te da miedo, hazlo con miedo, pero hazlo. Tu libertad empieza
              donde acaban tus prejuicios.
            </q>
            <p className="text-neutral-contrast-light mt-3">
              - Verónica Vallejo
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center mt-14 px-10">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-6xl text-center lg:text-left font-bold mb-5">
              Maigua Ojeda
            </h2>
            <ul className="text-black text:lg lg:text-xl font-serif font-light space-y-3">
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
            <div className="flex space-x-3">
              <Instagram className="hover:text-lobxs hover:cursor-pointer text-black my-5 text-2xl w-6 h-6" />
              <Youtube className="hover:text-lobxs hover:cursor-pointer text-black my-5 text-2xl w-6 h-6" />
              <WebWindow className="hover:text-lobxs hover:cursor-pointer text-black my-5 text-2xl w-6 h-6" />
            </div>
            <q className="text-neutral-contrast-light font-serif italic">
              Elegí vivir. Y porque hice esa elección, no tengo miedo. Yo he
              elegido hacer que cuente.
            </q>
            <p className="text-neutral-contrast-light mt-3">
              - Maigualida Ojeda
            </p>
          </div>
          <div className="w-4/6 z-20 order-1 lg:order-2">
            <Image src={Maigua} alt="maigua" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
