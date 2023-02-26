import React from 'react'
import NavBarServer from '../components/NavBarServer'

const PerfilPage = () => {
  return (
    <main className="bg-neutral">
      {/* @ts-expect-error Server Component */}
      <NavBarServer alternative />
      {/* hi {user} */}
      {/* side nav  */}
      {/* account form */}
    </main>
  )
}

export default PerfilPage
