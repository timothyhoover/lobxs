import classNames from 'classnames'
import Link from 'next/link'
import ChevronRight from '../icons/ChevronRight'

const NavItem = ({ item }: any) => {
  const { name, Icon, href } = item

  return (
    <li>
      <Link
        href={href}
        className="flex items-center text-sm text-neutral-contrast font-normal rounded-md p-2 hover:bg-lobxs hover:bg-opacity-10 hover:text-lobxs transition ease-in-out duration-100"
      >
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="w-5 text-current" />}
            <span className={classNames(Icon && 'ml-3', 'text-current')}>
              {name}
            </span>
          </div>
          <ChevronRight className="text-current w-5" />
        </div>
      </Link>
    </li>
  )
}

export default NavItem
