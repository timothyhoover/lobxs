import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-10">
      <h2 className="text-7xl text-center">Formulario de contacto</h2>
      <p className="text-xl text-center">
        ¿Tienes dudas? ¿Necesitas ayuda? Rellena el formulario que aparece a
        continuación y nos pondremos en contacto contigo lo antes posible.
        ¡Gracias lobx!
      </p>
      <ContactForm />
    </section>
  )
}

export default ContactSection
