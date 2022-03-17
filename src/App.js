import Fonda from './screens/Fonda'
import Reponse from './components/Reponse'
// import { Routes, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar />

      <Routes>
        <Route path='/Fonda' element={<Fonda />}></Route>
        <Route path='/Reponse' element={<Reponse />}></Route>
      </Routes>
    </div>
  )
}

export default App
