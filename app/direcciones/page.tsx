import React from 'react'
import NavBarServer from '../components/NavBarServer'

const DireccionesPage = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      <main></main>
    </>
  )
}

export default DireccionesPage
