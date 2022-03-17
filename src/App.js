import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header'
import Fonda from './screens/Fonda';

import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Routes>
        <Route path='/fonda' element={<Fonda />}></Route>
      </Routes>
    </div>
  );
}

export default App;
