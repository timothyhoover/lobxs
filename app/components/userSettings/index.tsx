'use client'

import { useRef, useState } from 'react'
import UserNavigation from './Nav'
import { AdminUser, PluginUsersPermissionsUser } from '../../../schemas'
import UserAvatar from '../UserAvatar'
import useOutsideClick from '../../../hooks/useOutsideClick'
import classNames from 'classnames'

type NavigationProps = {
  user: AdminUser | undefined
  className: string
}

const UserSettings = ({ user, className }: NavigationProps) => {
  const [dropdown, showDropdown] = useState(false)
  const ref = useRef(null)
  useOutsideClick(ref, () => showDropdown(false))

  return (
    <div className="relative">
      <button
        onClick={() => showDropdown(!dropdown)}
        className="cursor-pointer relative"
      >
        <UserAvatar
          className={classNames('w-[35px] h-[35px]', className)}
          src={user?.image}
          placeholder={user?.name?.charAt(0)}
        />
      </button>

      {dropdown && (
        <div
          ref={ref}
          className="flex flex-col bg-white shadow-md rounded-md w-40 h-auto absolute top-10 py-3 px-2 -left-10"
        >
          <UserNavigation user={user} />
        </div>
      )}
    </div>
  )
}

export default UserSettings
