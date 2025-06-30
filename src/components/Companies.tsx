import '../assets/css/Companies.css'
import kombitec from '../assets/img/kombitec.svg'
import stkhomes from '../assets/img/stkhomes.svg'
import publicaciones from '../assets/img/publicaciones.svg'
import eastwesr from '../assets/img/eastwesr.svg'
import creel from '../assets/img/creel.svg'

export const Companies = () => {
  const logos = [kombitec, stkhomes, publicaciones, eastwesr, creel]
  return (
    <div className='companies'>
        <div className="companies-container">
            <h2 className="companies-title">Empresas que confían en nosotros</h2>
            <p className="companies-description">Estas empresas confiaron en HyperOX para asegurar su crecimiento digital.</p>
        </div>
        <div className="highway-slider">
          <div className="highway-barrier">
            <ul className="highway-lane">
              {[...logos, ...logos].map((logo, idx) => (
                <li className="highway-car" key={idx}>
                  <img src={logo} alt="logo empresa" />
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

