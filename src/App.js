// import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NavBar from './components/Navbar';
import PageHome from './screens/PageHome.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <PageHome />
    </div>
  );
}

export default App;
