import '../assets/css/Presentation.css'
import ciberseguridad from '../assets/img/ciberseguridad.svg'
import asesor from '../assets/img/asesor.svg'
import nube from '../assets/img/nube.svg'

export const Presentation = () => {
  return (
    <div className="presentation">
      <div className="presentation-container">
        <div className="presentation-content">
          <h2 className="presentation-title">Tu ventaja competitiva en la nube </h2>
          <p className="presentation-description">Ofrecermos vigilancia constante, respuesta inmediata.
          Tu seguridad es nuestra prioridad.</p>
        </div>
      </div>
        <div className='presentation-content-card'>
            <div className='presentation-card'>
                <div className='presentation-card-content-title'>
                    <img src={ciberseguridad} alt="ciberseguridad" />
                    <h3 className='presentation-card-title'>Ciberseguridad 24/7</h3>
                </div>
                <div className='presentation-card-content'>
                    <p>
                        Nuestro Centro de Operaciones de Seguridad (SOC)
                        monitorea y responde a amenazas en tiempo real,
                        garantizando la integridad de tus datos y la continuidad
                        operativa de tu negocio.
                    </p>
                </div>
                <p className='presentation-card-title-footer'>
                    Protege tu empresa con vigilancia constante
                </p>
            </div>
            <div className='presentation-card'>
                <div className='presentation-card-content-title'>
                    <img src={nube} alt="ciberseguridad" />
                    <h3 className='presentation-card-title'>Soluciones en la Nube</h3>
                </div>
                <div className='presentation-card-content'>
                    <p>
                        Ofrecemos servicios de nube privada que garantizan
                        la seguridad y disponibilidad de tu información, 
                        permitiéndote acceder a tus datos desde cualquier
                        lugar y en cualquier momento.
                    </p>
                </div>
                <p className='presentation-card-title-footer'>
                    Almacenamiento seguro y accesible
                </p>
            </div><div className='presentation-card'>
                <div className='presentation-card-content-title'>
                    <img src={asesor} alt="ciberseguridad" />
                    <h3 className='presentation-card-title'>Consultoría Especializada</h3>
                </div>
                <div className='presentation-card-content'>
                    <p>
                        Nuestro equipo de alto desempeño desarrolla
                        soluciones y servicios para mejorar la eficiencia 
                        y seguridad tecnológica de tu empresa, adaptándonos
                        a tus necesidades específicas.
                    </p>
                </div>
                <p className='presentation-card-title-footer'>
                    Asesoría personalizada para tu negocio
                </p>
            </div>
        </div>
    </div>
  )
}
