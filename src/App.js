import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Focuskeeper from './pages/Focuskeeper';
import Work from './components/Work';
import About from './components/About';
import Therapyi from './pages/Therapyi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/focuskeeper" element={<Focuskeeper />} />
        <Route path="/therapyi" element={<Therapyi />} />
      </Routes>
    </Router>
  );
}

export default App;
