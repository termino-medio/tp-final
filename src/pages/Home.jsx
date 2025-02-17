import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout";  // La ruta depende de la ubicación real de Layout.jsx


const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const productosCollection = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCollection);
      const productosList = productosSnapshot.docs.map(doc => doc.data());
      setProductos(productosList);
    };
    fetchProductos();
  }, []);

  return (
    <Layout>
      <div className="container">
        <h1 className="title has-text-centered">Nuestros Productos</h1>
        <div className="columns is-multiline">
          {productos.map((producto, index) => (
            <div key={index} className="column is-3">
              <div className="card">
                <div className="card-content">
                  <p className="title">{producto.nombre}</p>
                  <p>{producto.precio}</p>
                  <p>{producto.sku}</p>
                  <Link to={`/producto/${producto.sku}`} className="button is-link">Ver Detalles</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
