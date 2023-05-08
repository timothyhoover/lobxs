'use client'

import React, { ForwardedRef, forwardRef, MouseEventHandler } from 'react'
import Cancel from './icons/Cancel'
import Overlay from './Overlay'

type DrawerProps = {
  children?: JSX.Element | JSX.Element[]
  onClick?: MouseEventHandler<HTMLButtonElement>
  show: boolean
}

const Drawer = (
  { children, onClick, show }: DrawerProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <>
      {show && <Overlay />}
      <div
        ref={ref}
        className={`top-0 right-0 w-[65vw] md:w-[50vw] lg:w-[35vw] bg-white px-5 pt-20 pb-app text-black fixed h-full z-50 ease-in-out duration-300 ${
          show ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <button
          className="flex items-center cursor-pointer fixed right-5 top-3 lg:right-4 lg:top-6"
          onClick={onClick}
        >
          <Cancel className="text-4xl w-10 h-10 text-black" />
        </button>
        {children}
      </div>
    </>
  )
}

export default forwardRef(Drawer)
