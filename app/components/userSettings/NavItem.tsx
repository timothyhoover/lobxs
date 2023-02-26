import classNames from 'classnames'
import Link from 'next/link'
import { Component, ReactNode } from 'react'
import ChevronRight from '../icons/ChevronRight'

type ItemProps = {
  name: string
  href?: string
  Icon?: Component
}

const NavItem = ({ item, isButton, ...rest }: any) => {
  const { name, Icon, href } = item
  const classes =
    'flex items-center w-full text-sm text-neutral-contrast font-normal rounded-md p-2 hover:bg-lobxs hover:bg-opacity-10 hover:text-lobxs transition ease-in-out duration-100'
  const Component = ({ children }: { children: ReactNode }) =>
    isButton ? (
      <button className={classes} {...rest}>
        {children}
      </button>
    ) : (
      <Link className={classes} href={href} {...rest}>
        {children}
      </Link>
    )
  return (
    <li>
      <Component>
        <div className="flex justify-between w-full">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="w-5 text-current" />}
            <span className={classNames(Icon && 'ml-3', 'text-current')}>
              {name}
            </span>
          </div>
          <ChevronRight className="text-current w-5" />
        </div>
      </Component>
    </li>
  )
}

export default NavItem
