import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Logo from '../assets/img/lobxs-logo.png'
import { Button } from './Button'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const toggleMenu = (): void => {
    return setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      return document.body.classList.add('modal-open')
    } else {
      return document.body.classList.remove('modal-open')
    }
  }, [isOpen])

  return (
    <nav className="w-full z-50 bg-transparent absolute">
      <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-10 lg:px-0 w-full">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-grow space-x-4">
            <Image
              className="lg:h-28 w-auto h-[100px]"
              src={Logo}
              width={200}
              height={150}
            />
          </div>
          <div className="flex items-center space-x-5 z-50">
            <ul
              className="flex items-center space-x-5 z-50"
              onClick={toggleMenu}
            >
              <li className="hidden lg:flex">
                <a
                  className="text-white hover:text-gray-400 text font-semibold py-1 px-3"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  className="text-white hover:text-gray-400 text font-semibold py-1 px-3"
                  href="/#"
                >
                  Las Lobas
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  className="text-white hover:text-gray-400 text font-semibold py-1 px-3"
                  href="/#"
                >
                  Entrenamientos
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  className="text-white hover:text-gray-400 text font-semibold py-1 px-3"
                  href="/#"
                >
                  Academia de Trail
                </a>
              </li>
              <li className="hidden lg:flex">
                <a
                  className="text-white hover:text-gray-400 text font-semibold py-1 px-3"
                  href="/#"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <div className="lg:flex items-center hidden">
              <Button
                variant="secondary"
                customClasses="!text-white !border-white"
              >
                Tienda
              </Button>
            </div>
            {/* hamburger menu (smaller devices only) */}
            <ul className="flex lg:hidden z-50" onClick={toggleMenu}>
              <li className="flex items-center">
                <a className="flex-none absolute right-0 px-5 z-30" href="#">
                  <p className="text-gray-200 font-semibold tracking-wide hover:bg-neutral-contrast hover:bg-opacity-30 rounded px-2 py-2">
                    <svg
                      className="h-6 w-6 stroke-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  </p>
                </a>
                <div
                  className={`fixed top-0 left-0 z-40 h-full w-full bg-black transition
                ${isOpen ? 'visible opacity-40' : 'invisible opacity-0'}`}
                ></div>
                <div
                  className={`absolute top-0 right-0 z-50 w-full px-5 mt-24 transition
                ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                >
                  <ul className="flex flex-col bg-white w-full rounded shadow-md overflow-hidden">
                    <li className="flex">
                      <a
                        className="flex flex-1 text-lg text-lobxs-black hover:bg-lobxs-lighter font-semibold px-8 py-4"
                        href="/"
                      >
                        Inicio
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="flex flex-1 text-lg text-lobxs-black hover:bg-lobxs-lighter font-semibold px-8 py-4"
                        href="/#"
                      >
                        ¿Cómo Funciona?
                      </a>
                    </li>
                    <li className="flex">
                      <a
                        className="flex flex-1 text-lg text-lobxs-black hover:bg-lobxs-lighter font-semibold px-8 py-4"
                        href="/#"
                      >
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
