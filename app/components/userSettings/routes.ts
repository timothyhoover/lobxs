import { AdminUser, PluginUsersPermissionsUser } from '../../../schemas'
import Settings from '../icons/Settings'

type NavigationProps = {
  user: AdminUser | undefined
}

export const userSettingsRoutes = ({ user }: NavigationProps) => {
  return [
    {
      name: 'Settings',
      href: '/',
      Icon: Settings,
      hide: !user
    }
  ]
}
