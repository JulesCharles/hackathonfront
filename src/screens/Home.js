import './styles/Home.css'
import quizz from '../assets/quizz.jpeg'
import fusee from '../assets/fusee.png'
import cadeau from '../assets/cadeau.png'
import bourse from '../assets/bourse.png'
// import { FaRocket } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='homecontainer'>
      <div className='title'>Bonjour Olivia !</div>
      <div className='jauge'></div>
      <div className='jauge2'></div>
      <div className='points'>4060 pts /6000 pts</div>
      <img className='logoQuiz' src={quizz} width='200px' alt='' />
      <div className='obj'>
        <div className='objectifs'>Objectifs :</div>
        <div className='jauge4'></div>
        <div className='point1'>1060 pts / 2000 pts</div>
        <div className='stylo'>
          <img className='fusee' src={fusee} width='45px' alt='' />
          Un Stylo BP
        </div>

        <div className='jauge3'></div>
        <div className='point2'>1500 pts / 2000 pts</div>
        <div className='enceinte'>
          <div className='jauge5'></div> <div className='jauge6'></div>
          <img className='cadeau' src={cadeau} width='45px' alt='' /> Une
          enceinte JBL
        </div>
        <div className='jauge7'></div>
        <div className='jauge8'></div>
        <div className='point3'> 440 pts / 2000 pts</div>
        <div className='bourseGlobal'>
          <img className='bourse' src={bourse} width='45px' alt='' />
          <div className='textBourse'>Chèque cadeau</div>
        </div>
      </div>
    </div>
  )
}

export default Home
