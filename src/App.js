// import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NavBar from './components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Modal from './components/Modal';
// import Header from './components/Header'
// import Fonda from './screens/Fonda';
// import PageHome from './screens/PageHome';
// import Feedback from './screens/Feedback';
// import Quiz from './screens/Quiz';

import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className='App'>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='save-button'
        onClick={() => (modalOpen ? close() : open())}
      >
        Fin du quizz
      </motion.button>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>

      <NavBar />
      <Header />
      {/* <Header /> */}
      <Routes>
        {' '}
        {/* <Route path='/' element={<PageHome />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/fonda' element={<Fonda />}></Route>{' '}
        <Route path='/monavis' element={<Fonda />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
