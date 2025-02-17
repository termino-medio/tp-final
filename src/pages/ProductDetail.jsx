import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ProductDetail = () => {
  const { sku } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productoDoc = doc(db, 'productos', sku);
        const productoSnapshot = await getDoc(productoDoc);
        if (productoSnapshot.exists()) {
          setProducto(productoSnapshot.data());
        } else {
          setError('Producto no encontrado');
        }
      } catch (error) {
        setError('Hubo un error al obtener el producto');
      }
    };

    fetchProducto();
  }, [sku]);

  if (error) return <p>{error}</p>;
  if (!producto) return <p>Cargando...</p>;

  return (
<div className="container">
  <h1 className="title">{producto.nombre}</h1>
  <div className="columns">
    <div className="column is-half">
      <figure className="image is-16by9">
        <img src={producto.imagenUrl} alt={producto.nombre} />
      </figure>
    </div>
    <div className="column is-half">
      <p>{producto.descripcion}</p>
      <p><strong>Precio: </strong>${producto.precio}</p>
      <p><strong>SKU: </strong>{producto.sku}</p>
      <button className="button is-link">Añadir al carrito</button>
    </div>
  </div>
</div>

  );
};


export default ProductDetail;
