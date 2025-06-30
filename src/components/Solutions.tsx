import { useState } from 'react'
import '../assets/css/Solutions.css'
import continuity from '../assets/img/continuity.png'
import safe from '../assets/img/safe.png'
import shield from '../assets/img/shield.png'
import cloud from '../assets/img/cloud.png'
import bgcontinuity from '../assets/img/bgcontinuity.png'
import bgsafe from '../assets/img/bgsafe.png'
import bgshield from '../assets/img/bgshield.png'
import bgcloud from '../assets/img/bgcloud.png'

export const Solutions = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
        img: continuity,
        imgbg: bgcontinuity,
        size: '22%',
        title: "Hyper Contunity",
        subTitle:'Respaldo sin excusas, recuperación sin demoras.',
        description: "Protege tu operación incluso ante los peores escenarios: ransomware, errores humanos o fallos técnicos. Automatiza copias de seguridad, cumple con regulaciones y recupera tu información crítica en minutos, no días.",
        text:'Prevé, protege y garantiza  tu operación.',
        titleButton: 'Quiero continuidad garantizada',
    },
    {
        img: safe,
        imgbg: bgsafe,
        size: '35%',
        title: "Hyper Safe",
        subTitle:'Detección en segundos, respuesta en tiempo real.',
        description: "Nuestro SOC opera 24/7 para identificar amenazas antes de que afecten tu operación. Con inteligencia artificial, análisis de comportamiento y un equipo experto, prevenimos ataques, bloqueamos accesos no autorizados y mantenemos tus sistemas operativos funcionando sin pausa.",
        text:'Tu empresa segura, todo el tiempo.',
        titleButton: 'Activa mi protección SOC',
    },
    {
        img: shield,
        imgbg: bgshield,
        size: '30%',
        title: "Hyper Shield",
        subTitle:'Blindaje personalizado para tu infraestructura.',
        description: "Combinamos monitoreo continuo, soporte experto y soluciones adaptadas a tu operación para prevenir brechas de seguridad y reaccionar ante cualquier evento. Ideal para empresas que requieren protección a medida, sin importar su tamaño.",
        text:'Ciberseguridad Inteligente con Soporte Especializado 24/7',
        titleButton: 'Blindar mi empresa',
    },
    {
        img: cloud,
        imgbg: bgcloud,
        size: '40%',
        title: "Hyper Cloud",
        subTitle:'Tu información segura, accesible y siempre disponible',
        description: "Centraliza tu operación digital en un entorno protegido, flexible y escalable. Desde servidores virtuales hasta respaldo remoto y escritorios virtuales (VDI), todo está pensado para que trabajes sin interrupciones, desde cualquier lugar.",
        text:'Solución Integral para Documentos Sensibles',
        titleButton: 'Explorar la Nube',
    }
  ]

//   const nextSlide = () => {
//     setCurrentSlide((prev) => {
//       if (prev === slides.length - 1) {
//         return 0
//       }
//       return prev + 1
//     })
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => {
//       if (prev === 0) {
//         return slides.length - 1
//       }
//       return prev - 1
//     })
//   }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="solutions" style={{
      backgroundImage: `url(${slides[currentSlide].imgbg})`,
      backgroundSize: slides[currentSlide].size,
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="solutions-container">
            <h2 className="solutions-title">Tu ventaja competitiva en la nube </h2>
          <p className="solutions-description">Ofrecermos vigilancia constante, respuesta inmediata.
          Tu seguridad es nuestra prioridad.</p>
        </div>
      <div className='solutions-slider'>
        <div className="carousel-container">
          <div 
           className="carousel-track"
           style={{
             transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
             width: `${slides.length * 100}%`
           }}
            >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide"
              >
                <div className="slide-content">
                    <h3 className="solutions-title slide-title">{slide.title}</h3>
                    <p className="solutions-description">{slide.subTitle}</p>
                    <div className='slide-container'>
                        <div className="slide-img" >
                          <img src={slide.img} alt={slide.title} />
                        </div>
                        <div>
                            <p className="slide-description text-align-left">{slide.description}</p>
                            <p className="slide-text">{slide.text}</p>
                            <div className='text-align-end'>
                              <button className='slide-button'>{slide.titleButton}</button>
                            </div>
                        </div>
                    </div>
                  
                  
                </div>
              </div>
            ))}
          </div>
          
          {/* <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
            ›
          </button> */}
          
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
