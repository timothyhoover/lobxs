import React, {
  forwardRef,
  ForwardedRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes
} from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'
import { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: string
  error?: string | React.ReactElement
  className?: string
  wrapperClasses?: string
  label?: string
  labelProps?: {
    [key: string]: any
  }
}

const ForwardedRefInput = (
  {
    variant = 'primary',
    error,
    className,
    label,
    labelProps,
    wrapperClasses,
    ...rest
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  if (error) {
    variant = 'danger'
  }

  const inputClasses = twMerge(
    classNames([
      'block px-2.5 pb-2.5 pt-4 w-full text-neutral-contrast bg-transparent rounded-lg border appearance-none peer',
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
    'absolute text-neutral-contrast duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-neutral px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[25px] peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1',
    variant === 'danger' ? 'text-alert' : 'peer-focus:text-black'
  ])

  const wrapperClassNames = twMerge('relative w-full', wrapperClasses)

  return (
    <>
      <div className={wrapperClassNames}>
        <input ref={ref} {...rest} className={inputClasses} placeholder=" " />
        <label {...labelProps} className={labelClasses}>
          {label}
        </label>
        <p className="text-alert top">{error}</p>
      </div>
    </>
  )
}

const Input = forwardRef(ForwardedRefInput)

export default Input
