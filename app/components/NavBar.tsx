'use client'

import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Drawer from './Drawer'
import CartList from './CartList'
import Overlay from './Overlay'
import Link from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import useOutsideClick from '../../hooks/useOutsideClick'
import Cart from './icons/Cart'
import UserSettings from './userSettings'
import { PluginUsersPermissionsUser } from '../../schemas'
import { UserContextProvider } from '../../context/UserContext'
import { CartContextProvider } from '../../context/CartContext'

type NavBarProps = {
  alternative?: boolean
  user?: PluginUsersPermissionsUser['attributes'] | undefined
}

const NavBar = ({ user, alternative }: NavBarProps) => {
  const [menu, setMenu] = useState(false)
  const [drawer, setDrawer] = useState(false)
  const toggleMenu = () => setMenu(!menu)
  const toggleDrawer = () => setDrawer(!drawer)
  const pathname = usePathname()
  const hamburgerRef = useRef(null)

  useEffect(() => {
    if (menu || drawer) {
      return document.body.classList.add('modal-open')
    } else {
      return document.body.classList.remove('modal-open')
    }
  }, [menu, drawer])

  useOutsideClick(hamburgerRef, () => setMenu(false))

  const baseClasses = classNames(
    'w-full z-30 absolute p-5',
    alternative ? 'bg-white shadow-md' : 'bg-transparent'
  )

  const navigationTextClasses = classNames(
    'hover:underline decoration-2 decoration-lobxs text font-semibold py-1 px-3',
    alternative ? 'text-neutral-contrast' : 'text-white'
  )

  const storeButtonClasses = classNames(
    'hidden lg:flex',
    alternative
      ? 'border-neutral-contrast text-neutral-contrast hover:bg-neutral-contrast hover:bg-opacity-10 active:bg-opacity-20'
      : 'text-white border-white'
  )

  const userSettingsClasses = classNames(
    'hidden lg:flex',
    alternative
      ? 'border-neutral-contrast text-neutral-contrast'
      : 'text-white border-white'
  )

  const cartButtonClasses = classNames(
    'w-6 h-6 absolute right-16 lg:relative lg:right-auto transition-all ease-in-out duration-150 cursor-pointer hover:text-lobxs',
    alternative ? 'text-neutral-contrast' : 'text-neutral'
  )

  const logoClasses = classNames(
    'font-[edo] text-7xl',
    alternative ? 'text-neutral-contrast' : 'text-white'
  )

  return (
    <UserContextProvider>
      <nav className={baseClasses}>
        <div className="max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-10 lg:px-0 w-full">
          <div className="flex justify-between w-full items-center">
            <Link href="/" className="flex flex-grow space-x-4">
              <span className={logoClasses}>LOBXS</span>
            </Link>
            <div className="flex items-center space-x-5 z-50">
              <ul className="flex items-center 2xl:space-x-5 space-x-1 z-50">
                <li className="hidden lg:flex">
                  <Link
                    className={`${navigationTextClasses} ${
                      pathname === '/' && 'underline'
                    }`}
                    href="/"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="hidden lg:flex">
                  <Link
                    className={`${navigationTextClasses} ${
                      pathname === '/las-lobas' && 'underline'
                    }`}
                    href="/las-lobas"
                  >
                    Las Lobas
                  </Link>
                </li>
                <li className="hidden lg:flex">
                  <a
                    className={`${navigationTextClasses} ${
                      pathname === '/entrenamientos' && 'underline'
                    }`}
                    href="/entrenamientos"
                  >
                    Entrenamientos
                  </a>
                </li>
                <li className="hidden lg:flex">
                  <a
                    className={`${navigationTextClasses} ${
                      pathname === '/academia-de-trail' && 'underline'
                    }`}
                    href="/academia-de-trail"
                  >
                    Academia de Trail
                  </a>
                </li>
                <li className="hidden lg:flex">
                  <a
                    className={`${navigationTextClasses} ${
                      pathname === '/contacto' && 'underline'
                    }`}
                    href="/contacto"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
              <Link href="/tienda">
                <Button
                  size="sm"
                  variant="secondary"
                  className={storeButtonClasses}
                >
                  Tienda
                </Button>
              </Link>
              <Cart
                onClick={() => setDrawer(!drawer)}
                className={cartButtonClasses}
              />
              <UserSettings user={user} className={userSettingsClasses} />
            </div>
          </div>
        </div>
      </nav>
      {/* mobile nav */}
      <nav className="w-full bg-transparent overflow-x-hidden pointer-events-none fixed top-header z-50 h-[calc(100vh-4.5rem)] xs:max-w-screen-sm lg:hidden">
        <ul
          className={`w-full h-full p-5 overflow-y-scroll transition-transform transform shadow-md pointer-events-auto xs:p-10 z-50 ${
            menu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col bg-white w-full rounded shadow-md overflow-hidden">
            <li>
              <Link
                className="flex flex-1 text-lg text-black hover:bg-lobxs-lighter font-semibold px-8 py-4"
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-1 text-lg text-black hover:bg-lobxs-lighter font-semibold px-8 py-4"
                href="/las-lobas"
              >
                Las Lobas
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-1 text-lg text-black hover:bg-lobxs-lighter font-semibold px-8 py-4"
                href="/entrenamientos"
              >
                Entrenamientos
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-1 text-lg text-black hover:bg-lobxs-lighter font-semibold px-8 py-4"
                href="/academia-de-trail"
              >
                Academia de Trail
              </Link>
            </li>
            <li>
              <Link
                className="flex flex-1 text-lg text-black hover:bg-lobxs-lighter font-semibold px-8 py-4"
                href="/contacto"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
      <button
        ref={hamburgerRef}
        onClick={toggleMenu}
        className="lg:hidden absolute w-11 h-11 right-app top-[32px] appearance-none z-40"
      >
        <span
          className={`${menu && 'scale-x-0 opacity-0'} ${
            alternative ? 'bg-neutral-contrast' : 'bg-white'
          } absolute w-4 h-[3px] transition-all ease-in-out origin-right rounded-full right-2 top-3`}
        />
        <span
          className={`${menu && 'rotate-[135deg]'} ${
            alternative ? 'bg-neutral-contrast' : 'bg-white'
          } absolute w-6 h-[3px] transition-all ease-in-out -translate-y-1/2 rounded-full right-2 top-1/2`}
        />
        <span
          className={`${menu && 'rotate-[225deg]'} ${
            alternative ? 'bg-neutral-contrast' : 'bg-white'
          } absolute w-6 h-[3px] transition-all ease-in-out -translate-y-1/2 rounded-full right-2 top-1/2`}
        />
        <span
          className={`${menu && 'scale-x-0 opacity-0'} ${
            alternative ? 'bg-neutral-contrast' : 'bg-white'
          } absolute w-4 h-[3px] transition-all ease-in-out origin-left rounded-full right-2 bottom-3`}
        />
      </button>
      <Drawer onClick={toggleDrawer} show={drawer}>
        <CartContextProvider>
          <CartList />
        </CartContextProvider>
      </Drawer>
      {menu && <Overlay onClick={toggleMenu} />}
    </UserContextProvider>
  )
}

export default NavBar
