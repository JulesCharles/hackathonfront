import './styles/Fonda.css'
import { GoTriangleRight } from 'react-icons/go'

const Fonda = () => {
  return (
    <div className='fondacontainer'>
      <div className='title'>FONDAMENTAUX SANTE SECURITE</div>
      <div className='index1'>
        1 - J’utilise les moyens de protection collective et je porte les EPI
        adaptés.
      </div>
      <div className='pdf1'>
        {' '}
        <GoTriangleRight size='20px' color='black' />
        Télécharger le PDF pour en savoir plus
      </div>
      <div className='index2'>
        2 - Je réfléchi avant d’agir, pour moi et pour les autres (Temps
        d’observation préalable TOP et point d’arrêt).
      </div>

      <div className='pdf2'>
        {' '}
        <GoTriangleRight size='20px' color='black' />
        Télécharger le PDF pour en savoir plus
      </div>
      <div className='index3'>
        3 - Je respecte les 5 opérations de la consignation; je réalise
        systématiquement la VAT et l’encadrement MALT/CC.
      </div>
      <div className='pdf3'>
        <GoTriangleRight size='20px' color='black' />
        Télécharger le PDF pour en savoir plus
      </div>
      <div className='index4'>
        4 - Je ne manipule pas mon téléphone au volant et j'adapte ma vitesse à
        mon environnement.
      </div>
      <div className='pdf4'>
        <GoTriangleRight size='20px' color='black' />
        Télécharger le PDF pour en savoir plus
      </div>
      <div className='index5'>
        5 - Je ne travaille pas sous l'emprise de l'alcool et de drogues.
      </div>
      <div className='pdf5'>
        <GoTriangleRight size='20px' color='black' />
        Télécharger le PDF pour en savoir plus
      </div>
      <div className='index6'>
        6 - Avant l'ascension d'un support, je verifie son intégrité.
      </div>
      <div className='pdf6'>
        <GoTriangleRight size='20px' color='black' />
        Télécharger le PDF pour en savoir plus
      </div>
      <div className='index7'>
        7 - Je suis attentif lors de mes déplacements.
      </div>
      <div className='pdf7'>
        <GoTriangleRight size='20px' color='black' />
        Télécharger le PDF pour en savoir plus
      </div>
      <div className='index8'>
        8 - Lors de toute manipulation mécanique, je ne passe jamais sous la
        charge et je maintiens une distance de sécurité lors de son guidage.
      </div>
      <div className='pdf8'>
        <GoTriangleRight size='20px' color='black' />
        Télécharger le PDF pour en savoir plus
      </div>
    </div>
  )
}

export default Fonda
