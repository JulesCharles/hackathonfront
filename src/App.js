import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
import Fonda from './screens/Fonda'

import './App.css'
import { useAuth0 } from "@auth0/auth0-react"
import Feedback from './screens/Feedback'

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Routes>
        <Route path='/Feedback' element={<Feedback />}></Route>
        <Route path='/Fonda' element={<Fonda />}></Route>
      </Routes>
    </div>
  )
}

export default App
