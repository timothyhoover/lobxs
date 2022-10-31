import React, { ReactNode, useEffect } from 'react'

type ButtonProps = {
  children?: ReactNode
  onClick?: () => void
  variant?: string // default, primary, info, success, warning, danger, dark
  size?: string // sm, md, lg
  disabled?: boolean
  customClasses?: string
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled,
  customClasses,
  ...rest
}: ButtonProps) => {
  const setVariant = () =>
    variant === 'primary'
      ? 'px-5 rounded-lobxs-md disabled:bg-neutral-contrast-disabled disabled:bg-neutral-contrast-disabled bg-lobxs text-neutral font-semibold hover:lobxs-lightness-35 active:lobxs-lightness-25 duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-lobxs'
      : variant === 'secondary'
      ? `px-5 rounded-lobxs-md font-semibold disabled:border-neutral-contrast-disabled border-2 ${
          customClasses?.includes('text-' || 'border-')
            ? ''
            : 'text-lobxs border-lobxs'
        } border bg-transparent disabled:hover:bg-neutral hover:bg-lobxs-lighter hover:bg-opacity-40 active:bg-opacity-60 focus-visible:bg-lobxs-lighter focus-visible:bg-opacity-40`
      : variant === 'tertiary'
      ? 'px-5 rounded-md text-neutral-contrast font-medium border-2 border-neutral-300 bg-neutral hover:bg-neutral-200 focus-visible:bg-neutral-200 active:bg-neutral-300'
      : variant === 'danger'
      ? 'px-5 rounded-lobxs-md bg-alert disabled:bg-neutral-contrast-disabled text-lobxs-contrast font-semibold hover:lobxs-lightness-35 active:lobxs-lightness-25 duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-lobxs'
      : ''
  const setSize = () =>
    size === 'sm'
      ? 'h-10 text-sm'
      : size === 'md'
      ? 'h-12 text-base'
      : 'h-14 text-lg'

  return (
    <button
      className={`font-bold py-2 px-4 rounded ${customClasses} ${setVariant()} ${setSize()}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
