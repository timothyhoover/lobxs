import classNames from 'classnames'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: string
  size?: string
  className?: string
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonProps) => {
  const baseClasses =
    'appearance-none flex flex-auto justify-center overflow-hidden disabled:cursor-not-allowed ring-offset-2 items-center cursor-pointer !outline-0 transition-all duration-200 ease-in-out group !pointer-events-auto'

  const variants = [
    {
      'px-5 rounded-lobxs-md bg-lobxs text-white font-semibold hover:lobxs-lightness-35 active:lobxs-lightness-25 duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-lobxs':
        variant === 'primary'
    },
    {
      'px-5 rounded-lobxs-md font-semibold disabled:hover:bg-white text-lobxs border-lobxs border-2 bg-transparent hover:bg-lobxs-lighter hover:bg-opacity-20 active:bg-opacity-60 focus-visible:bg-lobxs-lighter focus-visible:bg-opacity-40':
        variant === 'secondary'
    },
    {
      'px-5 rounded-md text-neutral-contrast disabled:hover:bg-white font-medium border-2 border-neutral-contrast bg-neutral hover:bg-neutral-200 focus-visible:bg-neutral-200 active:bg-neutral-300':
        variant === 'tertiary'
    },
    {
      'px-5 rounded-lobxs-md bg-alert text-lobxs-contrast font-semibold hover:lobxs-lightness-35 active:lobxs-lightness-25 duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-lobxs':
        variant === 'danger'
    }
  ]

  const sizes = [
    { 'h-10 text-sm': size === 'sm' },
    { 'h-12 text-base': size === 'md' },
    { 'h-14 text-lg': size === 'lg' }
  ]

  const buttonClasses = twMerge(
    classNames(baseClasses, sizes, variants),
    className
  )

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}

export default Button
