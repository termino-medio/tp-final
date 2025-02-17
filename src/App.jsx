import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/components/Login';
import Navbar from '../src/components/Navbar'; // Asegúrate de importar Navbar
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Navbar /> {/* Esto debe estar aquí para que se vea en todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/producto/:sku" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
