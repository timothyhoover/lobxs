import React, { ComponentProps, forwardRef, ForwardedRef } from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

type InputProps = {
  variant?: string
  error?: boolean
  className?: string
  label?: string
  labelProps?: {
    [key: string]: any
  }
} & Omit<ComponentProps<'input'>, 'size'>

const ForwardedRefInput = (
  {
    variant = 'primary',
    error,
    className,
    label,
    labelProps,
    ...rest
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const inputClasses = twMerge(
    classNames([
      'w-full h-12 px-3 py-3 mt-1 placeholder-transparent border rounded bg-neutral peer text-neutral-contrast focus:outline-none focus-visible:border-black',
      {
        'border-neutral-contrast-light focus:ring-1 focus:ring-black focus:border-black focus:outline-none hover:border-black':
          variant === 'primary'
      },
      {
        'border-alert focus:ring-1 focus:ring-alert visited:ring-0 focus-visible:border-alert focus:border-alert focus:outline-none':
          variant === 'danger'
      }
    ]),
    className
  )
  const labelClasses = classNames([
    'p-1 bg-neutral absolute font-medium left-3 -top-2.5 text-neutral-contrast transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:left-3 text-sm peer-focus:text-sm pointer-events-none',
    variant === 'danger' ? 'peer-focus:text-alert' : 'peer-focus:text-black'
  ])
  return (
    <div className="relative w-full my-2">
      <input ref={ref} {...rest} className={inputClasses} />
      <label {...labelProps} className={labelClasses}>
        {label}
      </label>
    </div>
  )
}

const Input = forwardRef(ForwardedRefInput)

export default Input
