import { useContext } from 'react'
import { QuizContext } from '../contexts/quiz'
import './styles/Quiz.css'

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    console.log("quizState", quizState);
    return <div>Quiz</div>
  }
  
  export default Quiz
  