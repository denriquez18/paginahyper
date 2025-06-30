import logo from '../assets/img/LOGO.png'
import '../assets/css/Navbar.css'

export const Nabvar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" />
        <div className="navbar-links">
            <a href="#">Soluciones</a>
            <a href="#">Hyper Cloud</a>
            <a href="#">Data Center</a>
            <a href="#">Parners</a>
            <a href="#">Recursos</a>
            <a href="#">Nosotros</a>
        </div>
        <div className="navbar-buttons">
            <button>Contactar</button>
        </div>
    </div>
  )
}
