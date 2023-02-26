import React from 'react'
import NavBarServer from '../components/NavBarServer'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      <main className="bg-neutral pt-40">
        <section className="flex flex-col items-center max-w-screen-2xl mx-auto px-10 py-10">
          <h1 className="text-3xl mb-5">Acceder a su cuenta con Lobxs</h1>
          <LoginForm />
        </section>
      </main>
    </>
  )
}

export default Login
