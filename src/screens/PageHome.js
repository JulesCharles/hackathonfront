import React from 'react';
import barreProgress from '../assets/barreProgress.png';
import photoOlivia from '../assets/photoOlivia.jpg';
import './styles/PageHome.css';
import logoQuiz from '../assets/logoQuiz.png';
import stylo from '../assets/stylo.png'


const PageHome = () => {
  return (
    <div>
      <div className='nameOlivia'>
      <img className='photoOlivia' src={photoOlivia} alt='Photo de Profil' />
        <p className='bonjour'>Bonjour OLIVIA !</p>
        <img className='barreProgress' src={barreProgress} alt='Barre De Progression' />
        <p className='xp'>24000 pts / 30000 pts</p>
        <div className='quizzAccueil'>
          <div className='un'> <img className='logoQuiz' src={logoQuiz} alt='logoQuiz' /><br />
            <p className='pquiz'>QUIZ #1</p>
          </div>
          <div className='deux'> <img className='logoQuiz' src={logoQuiz} alt='logoQuiz' /><br />
            <p className='pquiz'>QUIZ #2
          </p>
          </div>
          <div className='trois'> <img className='logoQuiz' src={logoQuiz} alt='logoQuiz' /><br />
          <p className='pquiz'>QUIZ #3</p>
          </div>
          <div className='quatre'> <img className='logoQuiz' src={logoQuiz} alt='logoQuiz' /><br />
          <p className='pquiz'>QUIZ #4</p>
          </div>
        </div>
        <div className='boxLots'>
          <h1 className='titre'>
            Lots à gagner : <br/>
            <img className='stylo' src={stylo} alt='Stylo' /> <p className='textStylo'> Un stylo BP</p>
          </h1>


        </div>
      </div>
    </div>
  );
};

export default PageHome;

