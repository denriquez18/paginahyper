import '../assets/css/Hero.css'
// import heroImage from '../assets/img/ANIMACION.svg'
import Lottie from "lottie-react";
import Animation from "../assets/img/Animation.json";

export const Hero = () => {
  return (
    <div className="hero">

        <div className="hero-container">
            <div className="hero-content">
                <h1 className='hero-title'>Ciberseguridad y Nube para fortalecer tu negocio</h1>
                <p className='hero-description'>Combinamos detección avanzada, respuesta inmediata 
                y Backup como Servicio para proteger tus operaciones 24/7.</p>
                <div className="hero-buttons">
                    <button className='hero-button-primary'>Decubre Soluciones</button>
                    <button className='hero-button-secondary'>Hablar con un experto</button>
                </div>
            </div>
            <div className="hero-image">
                <Lottie animationData={Animation} loop={true} autoplay={true} />
            </div>
        </div>
    </div>
  )
}
