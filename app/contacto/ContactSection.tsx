import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto p-10">
      <h2 className="text-5xl text-center">Formulario de contacto</h2>
      <p className="text-xl text-center mt-3 mb-10">
        ¿Tienes dudas? ¿Necesitas ayuda? Rellena el formulario que aparece a
        continuación y nos pondremos en contacto contigo lo antes posible.
        ¡Gracias lobx!
      </p>
      <ContactForm />
    </section>
  )
}

export default ContactSection
