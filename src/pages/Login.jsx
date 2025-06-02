import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/App.css';
import logo from '../assets/HyperfitLOGO.png'; // Importa tu imagen local

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Por favor, completa ambos campos.');
      return;
    }
    // Aquí podrías agregar lógica de autenticación real
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Descubre tu rutina de ejercicios con IA</h1>
        
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
          }}>
            <img 
              src={logo} 
              alt="Logo HyperFit" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>
        
        <form style={{ width: '100%', marginBottom: '16px' }} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Introduce tu correo"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Introduce tu contraseña"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
        
        <button className="btn btn-outline" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/google.svg" alt="Google" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
          Continue with Google
        </button>

        <div style={{ marginTop: '20px', fontSize: '14px' }}>
          ¿No tienes una cuenta? <Link to="/register" style={{ color: '#8A2BE2', textDecoration: 'none' }}>Registrarse</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
