import { Routes, Route } from 'react-router-dom'
import Fonda from './screens/Fonda'
import Reponse from './components/Reponse'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/Fonda' element={<Fonda />}></Route>
        <Route path='/Reponse' element={<Reponse />}></Route>
      </Routes>
    </div>
  )
}

export default App
