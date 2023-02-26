import React from 'react'
import NavBarServer from '../components/NavBarServer'

const Pedidos = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      <main></main>
    </>
  )
}

export default Pedidos
