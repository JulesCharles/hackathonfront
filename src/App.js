// import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NavBar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header'
import Fonda from './screens/Fonda';

import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      {/* <Header /> */}
      <Routes>
        <Route path='/fonda' element={<Fonda />}></Route>
      </Routes>
    </div>
  );
}

export default App;
