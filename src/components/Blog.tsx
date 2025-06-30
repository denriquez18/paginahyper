import '../assets/css/Blog.css'
import Rectangle456 from '../assets/img/Rectangle456.png'
import Rectangle4561 from '../assets/img/Rectangle4561.png'
import Rectangle4562 from '../assets/img/Rectangle4562.png'
import Rectangle4563 from '../assets/img/Rectangle4563.png'

export const Blog = () => {
    const dataBlog = [
        {
            img: Rectangle456,
            text:'MDR vs. SOC: Entiende las diferencias y beneficios clave',
        },
        {
            img: Rectangle4561,
            text:' Guía Completa para Proteger Datos en la Nube',
        },
        {
            img: Rectangle4562,
            text:'7 Errores Comunes en Ciberseguridad',
        },
        {
            img: Rectangle4563,
            text:'¿Qué es un SOC y por qué tu empresa lo necesita en 2025?',
        },
    ]
  return (
    <div className='blog'>
         <div className="blog-container">
            <h2 className="blog-title">Amplia tus conocimientos</h2>
            <p className="blog-description">Accede a nuestros recursos gratuitos para mantenerte al día con las últimas tendencias tecnológicas y de seguridad.</p>
        </div>
        <div className="blog-cards">
          {dataBlog.map((item, idx) => (
            <button className="blog-card" key={idx}>
              <div className="blog-card-img">
                <img src={item.img} alt={item.text} />
              </div>
              <div className="blog-card-content">
                <p className="blog-card-text">{item.text}</p>
                <button className="blog-card-btn">Leer más</button>
              </div>
            </button>
          ))}
        </div>
    </div>
  )
}
