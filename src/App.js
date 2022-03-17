import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react"
import Feedback from './screens/Feedback'

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Routes>
        <Route path='/Feedback' element={<Feedback />}></Route>
      </Routes>
    </div>
  )
}

export default App
