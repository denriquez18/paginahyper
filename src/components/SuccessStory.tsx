import { useState } from 'react'
import '../assets/css/SuccessStory.css'
import grupoREC from '../assets/img/grupoREC.png'
import compass from '../assets/img/compass.png'
import seguros from '../assets/img/seguros.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const SuccessStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
        img: grupoREC,
        title: "Grupo REC Nacional",
        testimonial: "Con HyperOX logramos modernizar nuestra operación sin detenerla. La transición fue fluida y hoy trabajamos con más seguridad, velocidad y menos esfuerzo.",
        name:'David Ramírez, Director de Tecnología, Grupo REC',
        plus:'+40%',
        minus:'-35%',
        plusText:'Mayor velocidad de acceso y disponibilidad de datos críticos',
        minusText: 'Baja de incidencias operativas relacionadas con infraestructura.',
        link:'#',
    },
    {
      img: compass,
      title: "Compass Electronics Solutions",
      testimonial: "HyperOX nos dio la tranquilidad que necesitábamos. Hoy nuestra información está segura, disponible en todo momento y nuestro equipo puede trabajar desde cualquier lugar con total confianza",
      name:'Federico Méndez, CEO, Compass Electronics Solutions',
      plus:'+50%',
      minus:'-45%',
      plusText:'Disminución en riesgos asociados a pérdida de datos.',
      minusText: 'Aumento en la eficiencia operativa al unificar gestión y monitoreo.',
      link:'#',
  },
  {
    img: seguros,
    title: "Seguros y Fianzas en México",
    testimonial: "Con la solución de HyperOX, ahora operamos con la confianza de que nuestra información está protegida y disponible en todo momento, sin importar dónde se encuentren nuestros equipos.",
    name:'Carlos Hernández, Director de TI, Empresa de Seguros y Fianzas',
    plus:'+45%',
    minus:'-60%',
    plusText:'Reducción de incidentes de pérdida o corrupción de datos.',
    minusText: 'Mejora en los tiempos de recuperación de información.',
    link:'#',
},
    
    
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === slides.length - 1) {
        return 0
      }
      return prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return slides.length - 1
      }
      return prev - 1
    })
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  return (
    <div className='successstory'>
       <div className="successstory-container">
            <h2 className="successstory-title">Tu ventaja competitiva en la nube </h2>
          <p className="successstory-description">Ofrecermos vigilancia constante, respuesta inmediata.
          Tu seguridad es nuestra prioridad.</p>
        </div>
        <div className='successstory-slider'>
          <div className="carousel-container">
            <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentSlide * 33.333}%)`,
              width: `${slides.length * 100}%`
            }}
              >
              {slides.map((slide, index) => (
                <div key={index} className="carousel-slide-successstory">
                  <div className="slide-content-successstory">

                    <div className="slide-img-successstory">
                      <img src={slide.img} alt={slide.title} />
                    </div>

                    <div className='slide-container-successstory'>
                      <h3 className="slide-title-successstory">{slide.title}</h3>
                      <p className="slide-testimonial">"{slide.testimonial}"</p>
                      <p className="slide-testimonial">-{slide.name}</p>
                      <div className='slide-container-plus-minus-successstory'>
                        <div>
                          <p className="slide-plus-minus">{slide.plus}</p>
                          <p className="slide-plus-minus-text">{slide.plusText}</p>
                        </div>
                        <div>
                          <p className="slide-plus-minus">{slide.minus}</p>
                          <p className="slide-plus-minus-text">{slide.minusText}</p>
                        </div>
                      </div>
                      <div className='slide-button-group-successstory'>
                        <button className='slide-button-successstory'>Leer caso completo</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-btn-successstory carousel-btn-prev-successstory" onClick={prevSlide}>
              <IoIosArrowBack/>
            </button>
            <button className="carousel-btn-successstory carousel-btn-next-successstory" onClick={nextSlide}>
              <IoIosArrowForward />
            </button>
            
            <div className="carousel-dots-successstory">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot-successstory ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      
    </div>
  )
}

