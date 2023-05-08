'use client'

import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import Input from '../components/Input'
import axios, { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import ButtonLoading from '../components/loading/Button'
import { PluginUsersPermissionsUser } from '../../schemas'
import { keys, pick } from 'remeda'
import { useCookies } from 'react-cookie'

type ProfileFormProps = {
  user: PluginUsersPermissionsUser['attributes'] & { id: number }
}

const ProfileForm = ({ user }: ProfileFormProps) => {
  const {
    register,
    watch,
    formState: { errors, touchedFields },
    handleSubmit,
    getValues
  } = useForm({
    defaultValues: { ...pick(user, ['name', 'email']), password: '' }
  })
  const [updatingProfile, setUpdatingProfile] = useState(false)
  const [cookies] = useCookies(['jwt'])

  const onSubmit = async (data: FieldValues) => {
    const updatedProfileData = pick(data, keys(touchedFields))
    const notification = toast.loading('Registrando en proceso...')
    setUpdatingProfile(true)
    let result: AxiosResponse
    try {
      result = await axios.put(
        `http://localhost:1337/api/users/${user.id}`,
        updatedProfileData,
        {
          headers: { Authorization: `Bearer ${cookies.jwt}` }
        }
      )
      if (result.status === 200) {
        toast.success('¡Éxito!', {
          id: notification
        })
      }
    } catch (error: any) {
      toast.error('Algo fue mal...', {
        id: notification
      })
      result = error
    }
    setUpdatingProfile(false)
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
              ...(getValues('password')
                ? { required: 'Contraseña es reqerido' }
                : {})
            })}
            label="Contraseña"
            type="password"
            labelClassNames="bg-white"
            error={errors?.password?.message?.toString()}
          />
          <Input
            {...register('confirm_password', {
              ...(getValues('confirm_password')
                ? { required: 'Confirmar contraseña es reqerido' }
                : {}),
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
          disabled={updatingProfile}
          isLoading={updatingProfile}
          type="submit"
          className="w-full text-white bg-blue fill-blue"
          size="sm"
        >
          <div className="text-white">
            <p className="text-current">Actualize Cuenta</p>
          </div>
        </ButtonLoading>
      </form>
    </div>
  )
}

export default ProfileForm
