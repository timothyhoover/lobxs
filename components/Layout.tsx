import React, { FC, ReactNode } from 'react'
import NavBar from './NavBar'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout
