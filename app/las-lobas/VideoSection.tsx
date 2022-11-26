import React from 'react'

const VideoSection = () => {
  return (
    <section className="bg-nuestroEjemplo bg-cover bg-center h-[1000px] lg:h-[1200px] py-20 bg-neutral">
      <div className="flex flex-col h-full max-w-screen-lg 2xl:max-w-screen-2xl mx-auto">
        <div>
          <h3 className="text-shadow-white text-center text-6xl lg:text-8xl font-bold text-black -mb-6 lg:-mb-9">
            Nuestro
          </h3>
          <h3 className="text-shadow text-center text-6xl lg:text-8xl font-bold text-lobxs ml-36">
            Ejemplo
          </h3>
        </div>
        <div className="mt-20">
          <div className="mx-auto w-full md:w-10/12 lg:w-8/12 px-10">
            <div
              className="border-8 rounded-md border-white shadow-lg"
              style={{ padding: '56.25% 0 0 0', position: 'relative' }}
            >
              <iframe
                src="https://player.vimeo.com/video/312573228?h=d240f09bc1&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-xl lg:text-2xl text-white text-center px-10 mb-5">
              Una mujer sólo puede ser fuerte, sana, creativa, completa y feliz
              si encuentra el camino de regreso a las raíces de su naturaleza
              instintiva. Si vuelve a ser una “mujer lobo”. Si regresa hacia la
              salvaje e indómita mujer primordial que hay en ella.
            </p>
            <p className="text-blue font-medium text-center">
              CLARISSA PINKOLA ESTÉS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
