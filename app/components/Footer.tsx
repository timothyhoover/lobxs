'use client'

import { Instagram, YouTube } from 'iconoir-react'
import Image from 'next/image'
import React from 'react'
import SomosLobxs from '../../public/img/somoslobxs.png'
import Button from './Button'
import Input from './Input'

const Footer = () => {
  return (
    <footer className="relative bg-lobxsFooter bg-cover bg-neutral bg-top py-14 overflow-visible z-10">
      <div className="flex flex-col justify-center mx-auto lg:flex-row lg:justify-between max-w-screen-lg 2xl:max-w-screen-2xl px-5 lg:px-0 h-full pt-44 z-50">
        <nav className="flex flex-col mb-5 lg:mb-0">
          <p className="font-medium text-xl text-white mb-5">Enlaces Rápidos</p>
          <ul className="font-light text-white">
            <li className="hover:underline cursor-pointer">Inicio</li>
            <li className="hover:underline cursor-pointer">Las Lobxs</li>
            <li className="hover:underline cursor-pointer">Entrenamientos</li>
            <li className="hover:underline cursor-pointer">
              Academia de Trail
            </li>
            <li className="hover:underline cursor-pointer">Tienda</li>
            <li className="hover:underline cursor-pointer">Contacto</li>
          </ul>
        </nav>
        {/* download ebook */}
        <form className="flex flex-col justify-center bg-white p-app rounded-md">
          <p className="font-medium text-xl">
            E-BOOK GRATUITO: LAS 7 CLAVES PARA CORRER BIEN EN MONTAÑA
          </p>
          <p>
            ¡Este es nuestro regalo para ti! Déjanos tu correo electrónico y
            recibirás el E-book en tu inbox en breve.
          </p>
          <Input
            label="Correo Electrónico"
            wrapperClasses="my-5"
            labelClassNames="bg-white"
          />
          <Button
            size="sm"
            variant="secondary"
            className="border-black text-black"
          >
            Enviar
          </Button>
        </form>
      </div>
      <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto mt-8 px-5 lg:px-0">
        <div className="bg-white h-[1px] w-full" />
        <div className="flex justify-between items-center ">
          <Image src={SomosLobxs} alt="somos lobxs" width={150} />
          <div className="flex items-center space-x-3">
            <Instagram
              width={36}
              height={36}
              className="hover:text-lobxs cursor-pointer"
            />
            <YouTube
              width={36}
              height={36}
              className="hover:text-lobxs cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
