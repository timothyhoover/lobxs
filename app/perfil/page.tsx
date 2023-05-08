import React from 'react'
import { fetchUser } from '../../utils/fetch'
import NavBarServer from '../components/NavBarServer'
import ProfileForm from './ProfileForm'

const PerfilPage = async () => {
  const user = await fetchUser()
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      <main className="bg-neutral pt-40">
        <section className="flex flex-col items-center max-w-screen-2xl mx-auto px-10 py-10">
          <h1 className="text-3xl mb-5">Actualize sus detalles</h1>
          <ProfileForm user={user} />
        </section>
      </main>
    </>
  )
}

export default PerfilPage
