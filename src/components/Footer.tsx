import '../assets/css/Footer.css'
import LOGOhoxblanco from '../assets/img/LOGOhoxblanco.svg'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-main'>
        <div className='footer-col footer-brand'>
          <div className='footer-logo'>
            <img src={LOGOhoxblanco} alt="" />
          </div>
          <p className='footer-text'>No esperes a tener un problema: conecta con nosotros y fortalece tu operación hoy.</p>
          <button className='footer-btn'>Solicita tu diagnóstico gratis</button>
        </div>
        <div className='footer-col'>
          <h4 className='footer-title'>Navegación</h4>
          <ul className='footer-list'>
            <li>Soluciones</li>
            <li>Casos de éxito</li>
            <li>Infraestructura</li>
            <li>Nosotros</li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4 className='footer-title'>Biblioteca</h4>
          <ul className='footer-list'>
            <li>Blog</li>
            <li>E-Book</li>
            <li>Glosario</li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4 className='footer-title'>Contacto</h4>
          <ul className='footer-list'>
            <li>55 8993 8993</li>
            <li>contacto@hyperox.biz</li>
            <li className='footer-socials'>
              <a href='#' aria-label='Facebook'><i className='fab fa-facebook-f'></i></a>
              <a href='#' aria-label='LinkedIn'><i className='fab fa-linkedin-in'></i></a>
              <a href='#' aria-label='Instagram'><i className='fab fa-instagram'></i></a>
            </li>
          </ul>
        </div>
      </div>
      <hr className='footer-divider' />
      <div className='footer-bottom'>
        <p>Copyright ©Hyper-Ox 2025 | Todos los Derechos Reservados</p>
        <p>Política de Privacidad | Términos de Servicio</p>
      </div>
    </footer>
  )
}

