import { useState } from 'react'
import '../assets/css/DataCenter.css'
import ImageCTD from '../assets/img/ImageCTD.png'
import ImageCTD2 from '../assets/img/ImageCTD2.png'
import axtel from '../assets/img/axtel.png'
import ApprovedServer from '../assets/gif/ApprovedServer.gif'
import Cloud from '../assets/gif/Cloud.gif'
import Security from '../assets/gif/Security.gif'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const DataCenter = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
      {
          img: axtel,
          
      },
      {
        img: ImageCTD,
        
    },
    {
      img: ImageCTD2,

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

   
  return (
    <div className='datacenter'>
        <div className="datacenter-container">
            <h2 className="datacenter-title">Infraestructura Global  y Resiliente</h2>
            <p className="datacenter-description">Nuestro Data Center es reconocido por su excelencia e innocación. Nombrado como el Mejor del Mundo por ICREA.</p>
        </div>
        <div className='datacenter-content'>
            <div className='datacenter-carrusel'>
                <div className="carousel-container">
                    <div 
                        className="carousel-track"
                        style={{
                        transform: `translateX(-${currentSlide * 33.333}%)`,
                        width: `${slides.length * 100}%`
                        }}
                    >
                    {slides.map((slide, index) => (
                        <div key={index} className="carousel-slide-datacenter">
                        <div className="slide-content-datacenter">
                            <div className="slide-img-datacenter">
                            <img src={slide.img} alt="img" />
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                    <button className="carousel-btn-datacenter carousel-btn-prev-datacenter" onClick={prevSlide}>
                    <IoIosArrowBack/>
                    </button>
                    <button className="carousel-btn-datacenter carousel-btn-next-datacenter" onClick={nextSlide}>
                    <IoIosArrowForward />
                    </button>
                </div>
            </div>
            <div className='datacenter-info '>
                <div className='datacenter-info-content'>
                    <div className='datacenter-info-item'>
                        <div className='datacenter-info-icon'>
                            <img src={Security} alt="Descripción del gif" />
                        </div>
                        <div>
                            <h3 className='datacenter-info-title'>Seguridad y cumplimiento de alto nivel</h3>
                            <p className='datacenter-info-subtitle'>Seguridad física y lógica 24/7  con certificaciones internacionales.</p>
                        </div>
                    </div>
                    <div className='datacenter-info-item'>
                        <div className='datacenter-info-icon'>
                            <img src={Cloud} alt="Descripción del gif" />
                        </div>
                        <div>
                            <h3 className='datacenter-info-title'>Energía y continuidad garantizada</h3>
                            <p className='datacenter-info-subtitle'>Sistema de cogeneración único en Latinoamérica y respaldo con plantas de diésel + UPS por Data Hall.</p>
                        </div>
                    </div>
                    <div className='datacenter-info-item'>
                        <div className='datacenter-info-icon'>
                            <img src={ApprovedServer} alt="Descripción del gif" />
                        </div>
                        <div>
                            <h3 className='datacenter-info-title'>Escalabilidad y flexibilidad para tu operación</h3>
                            <p className='datacenter-info-subtitle'>Desde 1 rack hasta Data Halls dedicados, soluciones de nube híbrida, servidores físicos y virtuales, almacenamiento, DRP, VDI y más.</p>
                        </div>
                    </div>
                </div>
                <div className='text-align-end'>
                    <button className='slide-button-datacenter'>Conocer más</button>
                </div>
            </div>
        </div>
    </div>
  )
}
