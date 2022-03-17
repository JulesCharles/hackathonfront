import './styles/Fonda.css'
// import { GoTriangleRight } from 'react-icons/go'
import icone1 from '../assets/icone1.png'
import icone2 from '../assets/icone2.png'
import icone3 from '../assets/icone3.png'
import icone4 from '../assets/icone4.png'
import icone5 from '../assets/icone5.png'
import icone6 from '../assets/icone6.png'
import icone7 from '../assets/icone7.png'
import icone8 from '../assets/icone8.png'

const Fonda = () => {
  return (
    <div className='fondacontainer'>
      <div className='title'>FONDAMENTAUX SANTE SECURITE</div>
      <div className='infos'>
        <div className='columns'>
          <div className='registre'>
            <img className='icone1' src={icone1} width='50px' alt=''></img>
          </div>
          <div className='icone1Container'>
            J’utilise les moyens de protection collective et je porte les EPI
            adaptés.
          </div>
          <div className='registre'>
            <img className='icone2' src={icone2} width='50px' alt=''></img>
          </div>
          <div className='icone2Container'>
            Je réfléchi avant d’agir, pour moi et pour les autres (Temps
            d’observation préalable TOP et point d’arrêt).
          </div>
          <div className='registre'>
            <img className='icone3' src={icone3} width='50px' alt=''></img>
          </div>
          <div className='icone3Container'>
            Je respecte les 5 opérations de la consignation; je réalise
            systématiquement la VAT et l’encadrement MALT/CC.
          </div>
          <div className='registre'>
            <img className='icone4' src={icone4} width='50px' alt=''></img>
          </div>
          <div className='icone4Container'>
            Je ne manipule pas mon téléphone au volant et j'adapte ma vitesse à
            mon environnement.
          </div>

          <div className='registre'>
            <img className='icone5' src={icone5} width='50px' alt=''></img>
          </div>
          <div className='icone5Container'>
            Je ne travaille pas sous l'emprise de l'alcool et de drogues.
          </div>
          <div className='registre'>
            <img className='icone6' src={icone6} width='50px' alt=''></img>
          </div>
          <div className='icone6Container'>
            Avant l'ascension d'un support, je verifie son intégrité.
          </div>
          <div className='registre'>
            <img className='icone7' src={icone7} width='50px' alt=''></img>
          </div>
          <div className='icone7Container'>
            Je suis attentif lors de mes déplacements.
          </div>
          <div className='registre'>
            <img className='icone8' src={icone8} width='50px' alt=''></img>
          </div>
          <div className='icone8Container'>
            Lors de toute manipulation mécanique, je ne passe jamais sous la
            charge et je maintiens une distance de sécurité lors de son guidage.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fonda
