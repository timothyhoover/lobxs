import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import Profile from './icons/Profile'

type AvatarProps = {
  width?: number
  height?: number
  className?: string
  src?: string
  placeholder?: string
}

const UserAvatar = ({
  width = 40,
  height = 40,
  className,
  src,
  placeholder,
  ...rest
}: AvatarProps) => {
  const baseClasses = twMerge(
    classNames(
      'flex-shrink-0',
      src
        ? 'rounded-full mx-2 object-contain'
        : 'flex items-center justify-center overflow-hidden border border-white rounded-full h-7 w-7'
    ),
    className
  )

  return src ? (
    <Image
      className={baseClasses}
      alt="avatar"
      src={src}
      {...rest}
      width={width}
      height={height}
    />
  ) : placeholder ? (
    <div className={baseClasses}>
      <p className="text-xl font-medium text-lobxs-contrast font-serif">
        {placeholder}
      </p>
    </div>
  ) : (
    <Profile className="text-lobxs-contrast h-7 w-7" />
  )
}

export default UserAvatar
