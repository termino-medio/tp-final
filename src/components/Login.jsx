import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/firebase";
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


const handleGoogleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    navigate('/');
  } catch (error) {
    setError('Error en la autenticación con Google');
  }
};




<button className="button is-danger is-fullwidth" onClick={handleGoogleLogin}>
  Iniciar sesión con Google
</button>


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
    } catch (error) {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="container">
      <h1 className="title has-text-centered">Iniciar sesión</h1>
      <form onSubmit={handleLogin} className="box">
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
            <button type="submit" className="button is-link is-fullwidth">Entrar</button>
          </div>
        </div>
        {error && <p className="notification is-danger">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
