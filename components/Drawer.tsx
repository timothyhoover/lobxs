'use client'

import { Cancel } from 'iconoir-react'
import React, { ForwardedRef, forwardRef, MouseEventHandler } from 'react'
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
        className={`top-0 right-0 w-[35vw] bg-white p-10 pl-20 text-black fixed h-full z-50 ease-in-out duration-300 ${
          show ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <button
          className="flex items-center cursor-pointer fixed right-5 top-3 lg:right-10 lg:top-6"
          onClick={onClick}
        >
          <Cancel className="text-4xl text-black" />
        </button>
        {children}
        <h3 className="mt-20 text-4xl font-semibold text-black">
          I am a sidebar
        </h3>
      </div>
    </>
  )
}

export default forwardRef(Drawer)
