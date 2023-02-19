import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import Button, { ButtonProps } from '../Button'
import Spinner from './Spinner'

interface ButtonLoadingProps extends ButtonProps {
  isLoading: boolean
  children: ReactNode
  spinner?: ReactNode
  className: string
}

const ButtonLoading = ({
  isLoading,
  spinner,
  className,
  children,
  ...rest
}: ButtonLoadingProps) => {
  return (
    <Button className={className} {...rest}>
      {isLoading ? <Spinner className="w-5 h-5 text-current" /> : children}
    </Button>
  )
}

export default ButtonLoading
