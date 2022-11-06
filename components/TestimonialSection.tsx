import React from 'react'
import TestimonialExample from '../public/img/Testimonial-example.jpeg'
import TestimonialAvatar from './TestimonialAvatar'

const TestimonialSection = () => {
  return (
    <section className="relative bg-wolfPack bg-cover bg-center overflow-visible z-50">
      <div className='flex z-50 flex-col lg:flex-row lg:justify-between max-w-screen-lg 2xl:max-w-screen-2xl mx-auto justify-center px-10 lg:px-0 items-center h-[1200px] space-x-10 before:content[""] before:bg-topWhiteSmudge before:bg-cover before:bg-center before:absolute before:left-0 before:top-0 before:w-full before:h-[475px] before:bg-no-repeat before:z-10 after:content[""] after:bg-whiteSmudge after:bg-cover after:bg-center after:absolute after:left-0 after:bottom-0 after:w-full after:h-[475px] after:bg-no-repeat after:z-10'>
        <div className="order-2 lg:order-1 w-full h-2/6">
          <div className="d-carousel h-auto">
            <div
              id="item1"
              className="d-carousel-item w-full bg-white overflow-scroll rounded-md max-h-[400px]"
            >
              <p className="p-app">
                "Empecé con Maigua hace poco mas de un año, ya seguía su carrera
                desde hace tiempo y cuando vi el proyecto de Lobxs me pareció
                una buena manera de iniciarme en el trail, pues, por entonces,
                llevaba poco tiempo corriendo. Aunque no se lo he puesto muy
                fácil por diversas circunstancias, ella ha sabido como potenciar
                y reactivar mis ganas de avanzar en lo que se refiere al trail.
                No es sólo una gran atleta y entrenadora, si no que tiene
                también un corazón enorme, sabe empatizar y sacarte una sonrisa
                cuando lo necesitas, algo que admiro. Todavía me queda camino
                que recorrer y objetivos que pienso cumplir y tenerla como
                entrenadora para conseguirlos es una de las mejores elecciones
                que he hecho. Este último año he aprendido muchísimo y todavía
                me queda mucho más por aprender y eso..¡me encanta!" "Empecé con
                Maigua hace poco mas de un año, ya seguía su carrera desde hace
                tiempo y cuando vi el proyecto de Lobxs me pareció una buena
                manera de iniciarme en el trail, pues, por entonces, llevaba
                poco tiempo corriendo. Aunque no se lo he puesto muy fácil por
                diversas circunstancias, ella ha sabido como potenciar y
                reactivar mis ganas de avanzar en lo que se refiere al trail. No
                es sólo una gran atleta y entrenadora, si no que tiene también
                un corazón enorme, sabe empatizar y sacarte una sonrisa cuando
                lo necesitas, algo que admiro. Todavía me queda camino que
                recorrer y objetivos que pienso cumplir y tenerla como
                entrenadora para conseguirlos es una de las mejores elecciones
                que he hecho. Este último año he aprendido muchísimo y todavía
                me queda mucho más por aprender y eso..¡me encanta!"
              </p>
            </div>
            <div
              id="item2"
              className="d-carousel-item w-full bg-white rounded-md"
            >
              <p className="p-app">
                "Empecé con Maigua hace poco mas de un año, ya seguía su carrera
                desde hace tiempo y cuando vi el proyecto de Lobxs me pareció
                una buena manera de iniciarme en el trail, pues, por entonces,
                llevaba poco tiempo corriendo. Aunque no se lo he puesto muy
                fácil por diversas circunstancias, ella ha sabido como potenciar
                y reactivar mis ganas de avanzar en lo que se refiere al trail.
                No es sólo una gran atleta y entrenadora, si no que tiene
                también un corazón enorme, sabe empatizar y sacarte una sonrisa
                cuando lo necesitas, algo que admiro. Todavía me queda camino
                que recorrer y objetivos que pienso cumplir y tenerla como
                entrenadora para conseguirlos es una de las mejores elecciones
                que he hecho. Este último año he aprendido muchísimo y todavía
                me queda mucho más por aprender y eso..¡me encanta!"
              </p>
            </div>
            <div
              id="item3"
              className="d-carousel-item w-full bg-white rounded-md"
            >
              <p className="p-app">
                "Empecé con Maigua hace poco mas de un año, ya seguía su carrera
                desde hace tiempo y cuando vi el proyecto de Lobxs me pareció
                una buena manera de iniciarme en el trail, pues, por entonces,
                llevaba poco tiempo corriendo. Aunque no se lo he puesto muy
                fácil por diversas circunstancias, ella ha sabido como potenciar
                y reactivar mis ganas de avanzar en lo que se refiere al trail.
                No es sólo una gran atleta y entrenadora, si no que tiene
                también un corazón enorme, sabe empatizar y sacarte una sonrisa
                cuando lo necesitas, algo que admiro. Todavía me queda camino
                que recorrer y objetivos que pienso cumplir y tenerla como
                entrenadora para conseguirlos es una de las mejores elecciones
                que he hecho. Este último año he aprendido muchísimo y todavía
                me queda mucho más por aprender y eso..¡me encanta!"
              </p>
            </div>
            <div
              id="item4"
              className="d-carousel-item w-full bg-white rounded-md"
            >
              <p className="p-app">
                "Empecé con Maigua hace poco mas de un año, ya seguía su carrera
                desde hace tiempo y cuando vi el proyecto de Lobxs me pareció
                una buena manera de iniciarme en el trail, pues, por entonces,
                llevaba poco tiempo corriendo. Aunque no se lo he puesto muy
                fácil por diversas circunstancias, ella ha sabido como potenciar
                y reactivar mis ganas de avanzar en lo que se refiere al trail.
                No es sólo una gran atleta y entrenadora, si no que tiene
                también un corazón enorme, sabe empatizar y sacarte una sonrisa
                cuando lo necesitas, algo que admiro. Todavía me queda camino
                que recorrer y objetivos que pienso cumplir y tenerla como
                entrenadora para conseguirlos es una de las mejores elecciones
                que he hecho. Este último año he aprendido muchísimo y todavía
                me queda mucho más por aprender y eso..¡me encanta!"
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <TestimonialAvatar
              name="Victoria Fernandez Oruña"
              job="Corredor de montaña"
              src={TestimonialExample}
              alt="testimonial avatar"
            />
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="d-btn d-btn-xs">
              1
            </a>
            <a href="#item2" className="d-btn d-btn-xs">
              2
            </a>
            <a href="#item3" className="d-btn d-btn-xs">
              3
            </a>
            <a href="#item4" className="d-btn d-btn-xs">
              4
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-center w-full order-1 mb-12 lg:mb-0 lg:order-2">
          <div>
            <h3 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white text-shadow -mb-4 lg:-mb-8">
              ESCUCHA
            </h3>
            <h3 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-lobxs text-shadow ml-5 lg:ml-8 whitespace-nowrap">
              EL AULLIDO
            </h3>
            <p className="text-2xl lg:text-4xl xl:text6xl text-white text-shadow font-bold">
              ¿Qué Dicen Nuestrxs Atletas?
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black bg-opacity-40 -z-1" />
    </section>
  )
}

export default TestimonialSection
