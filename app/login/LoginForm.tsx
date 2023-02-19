'use client'

import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import GoogleButton from '../components/GoogleButton'
import Input from '../components/Input'

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data: Object) => console.log(data)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-10 shadow rounded-md min-w-[375px] md:min-w-[600px]"
    >
      <div className="space-y-5 mb-5">
        <Input
          {...register('email', {
            required: 'El correo electrónico es requerido',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'No es un correo electrónico de verdad'
            }
          })}
          error={errors?.email?.message?.toString()}
          label="Correo Electrónico"
          labelClassNames="bg-white"
        />
        <Input
          {...register('password', {
            required: 'El contraseña es requerido'
          })}
          label="Contraseña"
          labelClassNames="bg-white"
          error={errors?.password?.message?.toString()}
        />
      </div>
      <Link
        href="/"
        className="w-full flex justify-end text-blue hover:underline mb-5"
      >
        ¿Olivaste su contraseña?
      </Link>
      <Button type="submit" className="w-full bg-blue" size="sm">
        <div className="text-white">
          <p className="text-current">Login</p>
        </div>
      </Button>
      <Link href="/registrar">
        <Button
          variant="secondary"
          className="w-full mt-5 border-blue text-blue hover:bg-blue hover:bg-opacity-10"
          size="sm"
        >
          <div className="text-current">
            <p className="text-current">Crear Cuenta</p>
          </div>
        </Button>
      </Link>
      <div className="flex items-center space-x-2 py-5">
        <div className="h-[1px] w-full bg-neutral-300" />
        <p className="text-sm whitespace-nowrap text-neutral-contrast-light">
          O sigue con
        </p>
        <div className="h-[1px] w-full bg-neutral-300" />
      </div>
      <GoogleButton />
    </form>
  )
}

export default RegisterForm
