'use client'

import Link from 'next/link'
import React from 'react'

const FaqSection = () => {
  return (
    <section className="py-10 bg-neutral">
      <h3 className="text-4xl font-bold mb-5 text-center">Dudas Frecuentes</h3>
      <div className="px-10">
        <div className="shadow-md divide-y">
          <div tabIndex={0} className="d-collapse d-collapse-arrow">
            <h4 className="d-collapse-title">¿Qué es LOBXS?</h4>
            <div className="d-collapse-content font-serif text-sm space-y-4">
              <p>
                LOBXS es un movimiento deportivo que pretende empoderar a las
                personas. Nuestras bases son femeninas. Esto quiere decir que,
                desde aquí, mujeres y hombres trabajamos para que ELLAS tengan
                la oportunidad de encumbrar sus sueños. No obstante, somos
                conscientes de que es fundamental que el trabajo se haga JUNTXS,
                UNIDXS Y DE LA MANO.
              </p>
              <p>
                LOBXS, es el impulso que necesitas para conseguir tus metas y
                explorar tus límites con formación y seguridad.
              </p>
              <p>
                ¡Comunidad, entrenamientos, desafíos, expediciones y una APP
                específica para entrenar!”
              </p>
            </div>
          </div>
          <div tabIndex={1} className="d-collapse d-collapse-arrow">
            <h4 className="d-collapse-title">
              ¿En qué consiste el entrenamiento online?
            </h4>
            <div className="d-collapse-content font-serif text-sm space-y-4">
              <p>
                LOBXS no es un simple método de entrenamiento. Es un movimiento
                que genera acciones a través del deporte. Que encumbra sueños y
                utiliza el empoderamiento como vía para dejar el mundo un poco
                mejor. Y para que ese empoderamiento surja, el empoderado debe
                dejarse enseñar.
              </p>
              <p>
                A TRAVÉS DE NUESTRA APP (que podrás descargar en tu móvil),
                podrás tener todos tus entrenamientos en orden, hacer un
                seguimiento de tus progresos, entrar en la comunidad para
                compartir emociones y contactar con tu entrenadora de manera
                directa. ¡Todo desde la comodidad de tu smartphone!
              </p>
            </div>
          </div>
          <div tabIndex={1} className="d-collapse d-collapse-arrow">
            <h4 className="d-collapse-title">
              ¿Qué diferencia hay entre las 3 opciones BÁSICO, STANDARD y
              PREMIUM?
            </h4>
            <div className="d-collapse-content font-serif text-sm space-y-4">
              <p>
                La opción de entrenamiento “Básico” es recomendada solo para
                deportistas ya experimentados que no requieran gran formación y
                que por su experiencia puedan evolucionar con un seguimiento
                menos frecuente.
              </p>
              <p>
                La opción “Estandar” es una opción intermedia recomendada para
                deportistas cuyos conocimientos sobre el entrenamiento son muy
                básicos y desean evolucionar pero también formarse. Si sientes
                que tu rendimiento está estancado y quieres darle un giro a tus
                entrenamientos, esta es la opción más adecuada para ti.
              </p>
              <p>
                La opción “Premium” está diseñada para aquellos que están
                empezando desde cero pero también para aquellos que necesitan un
                seguimiento muy detallado o un acompañamiento muy especializado
                debido al tipo de prueba que estén preparando. Es el caso de
                carreras multietapa en autosuficiencia, o corredores que están
                empezando a hacer ultra distancia. También es la opción perfecta
                para los deportistas que deseen mayor contacto con su
                entrenadora y más formación. En resumen, la diferencia respecto
                a los otros planes de entrenamiento es la cantidad de tiempo
                face to face del que vas a disfrutar con tu entrenadora, así
                como la entrega de la equipación y la formación en la Academia
                Virtual, totalmente gratuitas.
              </p>
            </div>
          </div>
          <div tabIndex={1} className="d-collapse d-collapse-arrow">
            <h4 className="d-collapse-title">
              ¿Cómo es el proceso de compra y qué ocurre tras realizar el pago?
            </h4>
            <div className="d-collapse-content font-serif text-sm space-y-4">
              <p>
                Una vez establecido el contacto con tu entrenadora, ésta te dará
                de alta como cliente. A través de la APP podrás realizar el
                primer pago para poder acceder a tu plan de entrenamiento.
                Cuando el pago sea efectivo y se haya rellenado el formulario de
                evaluación inicial correctamente se procederá a la realización
                de la planificación del entrenamiento. El plazo de entrega es de
                48-72 horas laborables. Piensa que estamos haciendo algo
                completamente individualizado para ti y eso conlleva tiempo. De
                todas formas, tranquilx, ya que el pago NO empieza a contar
                hasta que recibes toda la documentación en tu APP.
              </p>
              <p>
                En primer lugar, desde la Página de “Entrenamientos” (poner
                enlace) podrás seleccionar el Plan de entrenamiento que más se
                ajuste a tus necesidades y hacer click en comprar el que desees.
                Seguidamente y una vez realizado el pago, se te informará de que
                tu pago se ha hecho efectivo y se te pedirá que rellenes un
                breve Formulario de Ingreso. Una vez cumplimentado, solo tendrás
                que esperar a que en las próximas 24 horas nuestras entrenadoras
                evalúen tus datos y te asignen aquella que va a poder ayudarte
                mejor en función de tus necesidades. Finalmente, dentro de ese
                plazo de 24 horas, la entrenadora asignada se pondrá en contacto
                con usted a través de un correo electrónico donde podrán agendar
                la primera reunión cara a cara a través de Google Meet.
              </p>
              <p>
                Tras la reunión, comenzarán sus entrenamientos desde la
                aplicación.
              </p>
            </div>
          </div>
          <div tabIndex={1} className="d-collapse d-collapse-arrow">
            <h4 className="d-collapse-title">¿Y si quiero darme de baja?</h4>
            <div className="d-collapse-content font-serif text-sm space-y-4">
              <p>
                LOBXS es una comunidad cuya puerta es giratoria. Puedes entrar y
                salir cuando quieras, y siempre serás bien recibidx. Lo más
                importante es que te lleves algo positivo de la experiencia y
                que seas feliz a nuestro lado. No existen cargos por abandonar
                el proyecto.
              </p>
            </div>
          </div>
        </div>
        <h5 className="text-2xl fond-bold my-10">
          ¿Más dudas? Escríbenos un email{' '}
          <Link className="text-lobxs underline" href="/contacto">
            aquí
          </Link>
        </h5>
      </div>
    </section>
  )
}

export default FaqSection
