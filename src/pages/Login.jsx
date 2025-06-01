import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Descubre tu rutina de ejercicios con IA</h1>
        
        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <div style={{ 
            backgroundColor: '#8A2BE2', 
            width: '120px', 
            height: '120px', 
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 20V10M18 14V4M6 14C6 15.1046 5.10457 16 4 16C2.89543 16 2 15.1046 2 14C2 12.8954 2.89543 12 4 12C5.10457 12 6 12.8954 6 14ZM18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8ZM12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17C8 15.8954 8.89543 15 10 15C11.1046 15 12 15.8954 12 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 style={{ color: 'white', margin: '5px 0 0 0' }}>HYPERFIT</h2>
            </div>
          </div>
        </div>
        
        <form style={{ width: '100%', marginBottom: '16px' }}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Introduce tu correo" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" id="password" name="password" className="form-control" placeholder="Introduce tu contraseña" required />
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
