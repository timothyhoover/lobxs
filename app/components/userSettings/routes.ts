import { PluginUsersPermissionsUser } from '../../../schemas'
import Archive from '../icons/Archive'
import Pin from '../icons/Pin'
import Profile from '../icons/Profile'

type NavigationProps = {
  user: PluginUsersPermissionsUser['attributes'] | undefined
}

export const userSettingsRoutes = ({ user }: NavigationProps) => {
  return [
    {
      name: 'Perfil',
      href: '/perfil',
      Icon: Profile,
      hide: !user
    },
    {
      name: 'Pedidos',
      href: '/pedidos',
      Icon: Archive,
      hide: !user
    },
    {
      name: 'Direcciones',
      href: '/direcciones',
      Icon: Pin,
      hide: !user
    },
    {
      name: 'Login',
      href: '/login',
      hide: user
    }
  ]
}
