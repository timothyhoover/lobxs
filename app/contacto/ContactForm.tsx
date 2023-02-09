'use client'

import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (data: Object) => console.log(data)
  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <Input
          {...register('name', {
            required: 'Nombre es requerido'
          })}
          wrapperClasses="mr-2"
          label="Nombre Completo"
          error={errors?.name?.message?.toString()}
        />
        <Input
          type="tel"
          {...register('phone', {
            required: 'Numero de teléfono es requerido',
            pattern: {
              value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
              message: 'No es un numero de teléfono de verdad'
            }
          })}
          label="Teléfono"
          error={errors?.phone?.message?.toString()}
        />
      </div>
      <div className="flex">
        <Input
          {...register('email', {
            required: 'El correo electrónico es requerido',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'No es un correo electrónico de verdad'
            }
          })}
          wrapperClasses="mr-2"
          label="Correo Electrónico"
          error={errors?.email?.message?.toString()}
        />
        <Input label="Tema" error={errors?.subject?.message?.toString()} />
      </div>
      <Textarea
        {...register('message', {
          required: 'Tiene que rellenarlo con un mensaje'
        })}
        className="min-h-[200px]"
        label="Mensaje"
        error={errors?.message?.message?.toString()}
      />
      <Button type="submit" className="min-w-[250px]" variant="tertiary">
        Enviar Mensaje
      </Button>
    </form>
  )
}

export default ContactForm
