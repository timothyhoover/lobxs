import { map } from 'remeda'
import { AdminUser } from '../../../schemas'
import NavItem from './NavItem'
import { userSettingsRoutes } from './routes'

type NavigationProps = {
  user: AdminUser | undefined
}

const UserNavigation = ({ user }: NavigationProps) => (
  <nav>
    <ul>
      {map(
        userSettingsRoutes({ user }),
        route => !route.hide && <NavItem key={route.href} item={route} />
      )}
    </ul>
  </nav>
)

export default UserNavigation
