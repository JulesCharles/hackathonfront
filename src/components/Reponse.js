import './styles/Reponse.css'
import chocphoto1 from '../assets/chocphoto1.jpg'

const Reponse = () => {
  return (
    <div className='reponsecontainer'>
      <div className='title'>QUIZZ #1</div>
      <div className='soustitle'>
        1/8 - Temps d'observation préalable et point d'arrêt.
      </div>
      <div>
        <img className='img1' src={chocphoto1} size='large' alt='logo'></img>
      </div>
    </div>
  )
}

export default Reponse
