import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/App.css';
import authService from '../services/authService';
import toastService from '../services/toastService';
import logo from '../assets/HyperfitLOGO.png';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check if we have a code in the URL (Google OAuth callback)
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // Handle the OAuth callback
      authService.handleGoogleCallback(code)
        .then((existed) => {
          if (existed) {
            navigate('/dashboard'); // Redirect to dashboard after successful login
          } else {
            navigate('/personal-profile'); // Redirect to dashboard after successful login
          }
        })
        .catch((error) => {
          console.error('Google login error:', error);
          // Handle error appropriately
        });
    }
  }, [location, navigate]);

  const handleGoogleLogin = () => {
    authService.googleLogin()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authService.login(email, password)
      .then(() => {
        navigate('/dashboard');
      }).catch((error) => {
        toastService.showError("Error al iniciar sesión");
      });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Descubre tu rutina de ejercicios con IA</h1>
        
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <img 
              src={logo} 
              alt="Logo HyperFit" 
              style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '10px' }} 
            />
        </div>
        
        <form onSubmit={handleSubmit} style={{ width: '100%', marginBottom: '16px' }}>
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
          <button 
          className="btn btn-outline" 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
          onClick={handleGoogleLogin}
        >
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/google.svg" alt="Google" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
          Continue with Google
        </button>
        </form>
        
        <div style={{ marginTop: '20px', fontSize: '14px' }}>
          ¿No tienes una cuenta? <Link to="/register" style={{ color: '#8A2BE2', textDecoration: 'none' }}>Registrarse</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
