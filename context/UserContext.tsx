'use client'

import axios from 'axios'
import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useCookies } from 'react-cookie'
import { PluginUsersPermissionsUser } from '../schemas'

type ContextTypes = {
  user: PluginUsersPermissionsUser | null | undefined
  logout: () => void
}

const UserContext = createContext<ContextTypes>({
  user: null,
  logout: () => null
})
const useUserContextState = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContextState was used outside of its Provider')
  }
  return context
}

const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [cookies, , removeCookie] = useCookies(['jwt'])
  const [user, setUser] = useState<PluginUsersPermissionsUser | null>()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const fetchUser = async (token: string) =>
      axios
        .get('http://localhost:1337/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(({ data }) => setUser(data))
        .catch(({ response }) => {
          console.log('An error occurred:', response)
        })
    if (cookies.jwt) {
      fetchUser(cookies.jwt)
    }
  }, [])

  const logout = useCallback(() => {
    removeCookie('jwt', {
      path: '/',
      domain: window.location.hostname,
      secure: true
    })
    setUser(null)
    if (pathname === '/') {
      router.refresh()
    } else {
      router.replace('/')
    }
  }, [])

  const contextValue = useMemo<ContextTypes>(
    () => ({
      user,
      logout
    }),
    [user, logout]
  )
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export { UserContextProvider, useUserContextState }
