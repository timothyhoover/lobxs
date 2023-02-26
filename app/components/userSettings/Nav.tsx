import { map } from 'remeda'
import { useUserContextState } from '../../../context/UserContext'
import { PluginUsersPermissionsUser } from '../../../schemas'
import Logout from '../icons/Logout'
import NavItem from './NavItem'
import { userSettingsRoutes } from './routes'

type NavigationProps = {
  user: PluginUsersPermissionsUser['attributes'] | undefined
}

const UserNavigation = ({ user }: NavigationProps) => {
  const { logout } = useUserContextState()
  return (
    <nav>
      <ul>
        {map(
          userSettingsRoutes({ user }),
          route => !route.hide && <NavItem key={route.href} item={route} />
        )}
        {user && (
          <NavItem
            isButton
            onClick={logout}
            item={{
              name: 'Logout',
              Icon: Logout
            }}
          />
        )}
      </ul>
    </nav>
  )
}

export default UserNavigation
