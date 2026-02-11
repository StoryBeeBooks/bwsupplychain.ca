import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import FAQ from './pages/FAQ';
import Policy from './pages/Policy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="showcase" element={<Showcase />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="policy" element={<Policy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
