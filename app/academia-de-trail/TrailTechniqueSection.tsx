import React from 'react'

const TrailTechniqueSection = () => {
  return (
    <section className="relative bg-trailTechniqueBackground bg-cover bg-top overflow-visible -mt-40 bg-neutral">
      <div className="pt-16">
        <h3 className="font-bold text-7xl text-center">Técnica</h3>
        <h3 className="text-lobxs font-bold text-7xl text-shadow text-center -mt-7 ml-10">
          de trail
        </h3>
      </div>
      <div className="flex flex-col max-w-screen-lg 2xl:max-w-screen-2xl mx-auto px-10 h-[1200px] xl:h-[1400px]">
        <div className="mx-auto w-full md:w-10/12 lg:w-8/12 px-10">
          <div
            className="border-8 rounded-md border-white shadow-lg mt-10"
            style={{ padding: '56.25% 0 0 0', position: 'relative' }}
          >
            <iframe
              src="https://www.youtube.com/embed/F18XAWBrNbI?controls=0"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-10">
          <div className="w-full lg:w-4/6">
            <p className="text-white font-bold text-xl lg:text-2xl text-shadow mb-8">
              ¿Te ha ayudado este vídeo? En la Academia de Trail y entrenamiento
              en montaña vas a encontrar 100 vídeos cortos como este con
              contenido teórico y práctico. Estos son los bloques teóricos:
            </p>
            <ul className="text-lg lg:text-xl space-y-2 text-shadow">
              <li>Bloque I: SALUD</li>
              <li>
                Bloque II: RENDIMIENTO: 1) Teoría del entrenamiento; 2) Fuerza,
                movilidad y propiocepción (con ejercicios prácticos); 3)
                Material auxiliar y cómo utilizarlo. Crea tu gimnasio en casa.
              </li>
              <li>
                Bloque III: TRAIL: 1) Teoría y técnicas; 2) Material
                imprescindible. 3) Entrenamientos
              </li>
              <li>
                Bloque IV: MONTAÑA: 1) Planificación; 2) Orientación; 3)
                Seguridad
              </li>
              <li>Bloque V: NUTRICIÓN</li>
              <li>Bloque VI: ENTRENAMIENTO Y MUJER</li>
              <li>Bloque VII: EXTRAS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrailTechniqueSection
