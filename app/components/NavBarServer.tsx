import React from 'react'
import NavBar from './NavBar'
import { cookies } from 'next/headers'
import { fetchUser } from '../../utils/fetch'

const NavBarServer = async ({ ...props }) => {
  const nextJSCookies = cookies()
  const jwt = nextJSCookies.get('jwt')
  const user = jwt ? await fetchUser(jwt?.value) : null

  return user ? <NavBar {...props} user={user} /> : <NavBar {...props} />
}

export default NavBarServer
