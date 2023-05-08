import React from 'react'
import NavBar from './NavBar'
import { fetchUser } from '../../utils/fetch'

const NavBarServer = async ({ ...props }) => {
  const user = await fetchUser()

  return user ? <NavBar {...props} user={user} /> : <NavBar {...props} />
}

export default NavBarServer
