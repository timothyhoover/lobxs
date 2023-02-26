'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FieldValues, useForm } from 'react-hook-form'
import Button from '../components/Button'
import GoogleButton from '../components/GoogleButton'
import Input from '../components/Input'
import { omit } from 'remeda'
import axios, { AxiosResponse } from 'axios'
import { useCookies } from 'react-cookie'
import toast from 'react-hot-toast'
import { oneMonthDelay } from '../../utils/date'
import ButtonLoading from '../components/loading/Button'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit
  } = useForm()
  const [, setCookie] = useCookies(['jwt'])
  const router = useRouter()
  const [registerInProcess, setRegisterInProcess] = useState(false)

  const onSubmit = async (data: FieldValues) => {
    const registerData = {
      username: data.email,
      ...omit(data, ['confirm_password'])
    }
    const notification = toast.loading('Registrando en proceso...')
    setRegisterInProcess(true)
    let result: AxiosResponse
    try {
      result = await axios.post(
        'http://localhost:1337/api/auth/local/register',
        registerData
      )
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
      }
    } catch (error: any) {
      toast.error('Algo fue mal...', {
        id: notification
      })
      result = error
    }
    setRegisterInProcess(false)
  }
  return (
    <div className="bg-white p-10 shadow rounded-md min-w-[375px] md:min-w-[600px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 mb-5">
          <Input
            {...register('name', {
              required: 'Nombre es requerido'
            })}
            error={errors?.name?.message?.toString()}
            label="Nombre"
            labelClassNames="bg-white"
          />
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
              required: 'Contraseña es reqerido'
            })}
            label="Contraseña"
            type="password"
            labelClassNames="bg-white"
            error={errors?.password?.message?.toString()}
          />
          <Input
            {...register('confirm_password', {
              required: 'Confirmar contraseña es reqerido',
              validate: (val: string) => {
                if (watch('password') != val) {
                  console.log('do not match')
                  return 'Sus contraseñas no coinciden'
                }
              }
            })}
            error={errors?.confirm_password?.message?.toString()}
            label="Confirmar Contraseña"
            type="password"
            labelClassNames="bg-white"
          />
        </div>
        <ButtonLoading
          disabled={registerInProcess}
          isLoading={registerInProcess}
          type="submit"
          className="w-full text-white bg-blue fill-blue"
          size="sm"
        >
          <div className="text-white">
            <p className="text-current">Crear Cuenta</p>
          </div>
        </ButtonLoading>
        <Link href="/registrar">
          <Button
            disabled={registerInProcess}
            variant="secondary"
            className="w-full mt-5 border-blue text-blue hover:bg-blue hover:bg-opacity-10"
            size="sm"
          >
            <div className="text-current">
              <p className="text-current">Login</p>
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
      <GoogleButton disabled={registerInProcess} />
    </div>
  )
}

export default RegisterForm
