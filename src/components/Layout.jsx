import React from 'react';
import Navbar from './Navbar';  // Importa Navbar
import Footer from './Footer';  // Importa Footer

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar /> {/* Barra de navegación */}
     <main style={{ flex: 1, paddingTop: '5rem' }}>
  {children}
</main>{/* Espacio para el contenido */}
      <Footer /> {/* Footer pegado al fondo */}
    </div>
  );
};

export default Layout;

