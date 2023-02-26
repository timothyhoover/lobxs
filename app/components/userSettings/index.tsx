'use client'

import { useRef, useState } from 'react'
import UserNavigation from './Nav'
import { PluginUsersPermissionsUser } from '../../../schemas'
import UserAvatar from '../UserAvatar'
import useOutsideClick from '../../../hooks/useOutsideClick'

type NavigationProps = {
  user: PluginUsersPermissionsUser['attributes'] | undefined
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
          className={className}
          src={user?.image}
          placeholder={user?.name?.charAt(0)}
        />
      </button>

      {dropdown && (
        <div
          ref={ref}
          className="flex flex-col bg-white shadow-md rounded-md h-auto py-3 px-2 absolute top-10 -right-3 min-w-[100px]"
        >
          <UserNavigation user={user} />
        </div>
      )}
    </div>
  )
}

export default UserSettings
