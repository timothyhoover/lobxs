'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FieldValues, useForm } from 'react-hook-form'
import Button from '../components/Button'
import GoogleButton from '../components/GoogleButton'
import Input from '../components/Input'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import axios, { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { oneMonthDelay } from '../../utils/date'
import ButtonLoading from '../components/loading/Button'

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const [, setCookie] = useCookies(['jwt'])
  const router = useRouter()
  const [loginInProcess, setLoginInProcess] = useState(false)

  const onSubmit = async (data: FieldValues) => {
    const notification = toast.loading('Registrando en proceso...')
    setLoginInProcess(true)
    let result: AxiosResponse
    try {
      result = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: data.email,
        password: data.password
      })
      if (result.status === 200) {
        setCookie('jwt', result.data.jwt, {
          path: '/',
          domain: window.location.hostname,
          secure: true,
          expires: oneMonthDelay()
        })
        toast.success('¡Éxito!', {
          id: notification
        })
        router.push('/')
        router.refresh()
      }
    } catch (error: any) {
      toast.error('Algo fue mal...', {
        id: notification
      })
      result = error
    }
    setLoginInProcess(false)
  }
  return (
    <div className="bg-white p-10 shadow rounded-md min-w-[375px] md:min-w-[600px]">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            type="password"
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
        <ButtonLoading
          disabled={loginInProcess}
          isLoading={loginInProcess}
          type="submit"
          className="w-full text-white bg-blue fill-blue"
          size="sm"
        >
          <div className="text-white">
            <p className="text-current">Login</p>
          </div>
        </ButtonLoading>
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
      </form>
      <div className="flex items-center space-x-2 py-5">
        <div className="h-[1px] w-full bg-neutral-300" />
        <p className="text-sm whitespace-nowrap text-neutral-contrast-light">
          O sigue con
        </p>
        <div className="h-[1px] w-full bg-neutral-300" />
      </div>
      <GoogleButton />
    </div>
  )
}

export default LoginForm
