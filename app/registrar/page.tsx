import React, { Suspense } from 'react'
import NavBarServer from '../components/NavBarServer'
import RegisterForm from './RegisterForm'

const Registrar = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
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
