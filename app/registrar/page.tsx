import React from 'react'
import NavBar from '../components/NavBar'
import RegisterForm from './RegisterForm'

const Registrar = () => {
  return (
    <>
      <NavBar alternative />
      <main className="bg-neutral pt-40">
        <section className="flex flex-col items-center max-w-screen-2xl mx-auto px-10 py-10">
          <h1 className="text-3xl mb-5">Crear una cuenta con Lobxs</h1>
          <RegisterForm />
        </section>
      </main>
    </>
  )
}

export default Registrar
