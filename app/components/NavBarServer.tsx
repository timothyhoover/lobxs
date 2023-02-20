import React from 'react'
import NavBar from './NavBar'
import { cookies } from 'next/headers'
import { fetchUser } from '../../utils/fetch'

const NavServer = async () => {
  const nextJSCookies = cookies()
  const jwt = nextJSCookies.get('jwt')
  const user = await fetchUser(jwt?.value)
  return <NavBar user={user} />
}

export default NavServer
