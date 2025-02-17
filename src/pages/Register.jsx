import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/firebase";

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');  // Redirige al login después de registrarse
    } catch (error) {
      setError('Error al registrar usuario');
    }
  };

  return (
    <div className="container">
      <h1 className="title has-text-centered">Registro</h1>
      <form onSubmit={handleRegister} className="box">
        <div className="field">
          <label className="label">Nombre</label>
          <div className="control">
            <input 
              type="text" 
              className="input" 
              placeholder="Nombre" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Apellido</label>
          <div className="control">
            <input 
              type="text" 
              className="input" 
              placeholder="Apellido" 
              value={apellido} 
              onChange={(e) => setApellido(e.target.value)} 
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input 
              type="email" 
              className="input" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input 
              type="password" 
              className="input" 
              placeholder="Contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-link is-fullwidth">Registrar</button>
          </div>
        </div>
        {error && <p className="notification is-danger">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
