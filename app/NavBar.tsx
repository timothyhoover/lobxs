'use client'

import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Logo from '../public/img/lobxs-logo.png'
import Button from '../components/Button'
import { Cart } from 'iconoir-react'
import Drawer from '../components/Drawer'
import Overlay from '../components/Overlay'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)
  const toggleMenu = (): void => {
    return setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen || showDrawer) {
      return document.body.classList.add('modal-open')
    } else {
      return document.body.classList.remove('modal-open')
    }
  }, [isOpen, showDrawer])

  return (
    <>
      <nav className="w-full z-30 bg-transparent absolute">
        <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-10 lg:px-0 w-full">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-grow space-x-4">
              <Image
                className="lg:h-28 w-auto h-[100px]"
                src={Logo}
                width={200}
                height={150}
                alt="logo"
              />
            </div>
            <div className="flex items-center space-x-5 z-50">
              <ul
                className="flex items-center space-x-5 z-50"
                onClick={toggleMenu}
              >
                <li className="hidden lg:flex">
                  <a
                    className="text-white hover:underline decoration-2 decoration-lobxs hover:text-gray-400 text font-semibold py-1 px-3"
                    href="/"
                  >
                    Inicio
                  </a>
                </li>
                <li className="hidden lg:flex">
                  <a
                    className="text-white hover:underline decoration-2 decoration-lobxs hover:text-gray-400 text font-semibold py-1 px-3"
                    href="/#"
                  >
                    Las Lobas
                  </a>
                </li>
                <li className="hidden lg:flex">
                  <a
                    className="text-white hover:underline decoration-2 decoration-lobxs hover:text-gray-400 text font-semibold py-1 px-3"
                    href="/#"
                  >
                    Entrenamientos
                  </a>
                </li>
                <li className="hidden lg:flex">
                  <a
                    className="text-white hover:underline decoration-2 decoration-lobxs hover:text-gray-400 text font-semibold py-1 px-3"
                    href="/#"
                  >
                    Academia de Trail
                  </a>
                </li>
                <li className="hidden lg:flex">
                  <a
                    className="text-white hover:underline decoration-2 decoration-lobxs hover:text-gray-400 text font-semibold py-1 px-3"
                    href="/#"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
              <Button
                variant="secondary"
                className="hidden lg:flex text-white border-white"
              >
                Tienda
              </Button>
              <Cart
                onClick={() => setShowDrawer(!showDrawer)}
                className="absolute right-16 lg:relative lg:right-auto hover:text-lobxs transition-all ease-in-out duration-150 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
      {/* mobile nav */}
      <nav className="w-full bg-transparent overflow-x-hidden pointer-events-none fixed top-header z-50 h-[calc(100vh-4.5rem)] xs:max-w-screen-sm">
        <ul
          className={`w-full h-full p-5 overflow-y-scroll transition-transform transform shadow-md pointer-events-auto xs:p-10 z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <li className="flex items-center">
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
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleMenu}
        className="lg:hidden absolute w-11 h-11 right-app top-[27px] appearance-none z-40"
      >
        <span
          className={`${
            isOpen && 'scale-x-0 opacity-0'
          } absolute w-4 h-[3px] transition-all ease-in-out origin-right rounded-full bg-white right-2 top-3`}
        />
        <span
          className={`${
            isOpen && 'rotate-[135deg]'
          } absolute w-6 h-[3px] transition-all ease-in-out -translate-y-1/2 rounded-full bg-white right-2 top-1/2`}
        />
        <span
          className={`${
            isOpen && 'rotate-[225deg]'
          } absolute w-6 h-[3px] transition-all ease-in-out -translate-y-1/2 rounded-full bg-white right-2 top-1/2`}
        />
        <span
          className={`${
            isOpen && 'scale-x-0 opacity-0'
          } absolute w-4 h-[3px] transition-all ease-in-out origin-left rounded-full bg-white right-2 bottom-3`}
        />
      </button>
      <Drawer
        onClick={() => setShowDrawer(!showDrawer)}
        show={showDrawer}
      ></Drawer>
      {isOpen && <Overlay />}
    </>
  )
}

export default NavBar
