import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Register = () => {
  const [accountType, setAccountType] = useState('personal');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle registration with a backend
    // For now, we'll just navigate to the appropriate profile page
    if (accountType === 'personal') {
      navigate('/personal-profile');
    } else {
      navigate('/professional-profile');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Registrarse</h1>
        <p style={{ marginTop: '-10px', marginBottom: '20px', color: '#666' }}>Crear una cuenta</p>
        
        <div className="tab-group">
          <div 
            className={`tab ${accountType === 'personal' ? 'active' : ''}`}
            onClick={() => setAccountType('personal')}
          >
            Cuenta personal
          </div>
          <div 
            className={`tab ${accountType === 'professional' ? 'active' : ''}`}
            onClick={() => setAccountType('professional')}
          >
            Cuenta profesional
          </div>
        </div>
        
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="form-group">
            <label className="form-label">Nombre de usuario</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Nombre" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ paddingLeft: '35px' }}
              />
              <svg 
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="email" 
                className="form-control" 
                placeholder="Correo" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ paddingLeft: '35px' }}
              />
              <svg 
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="password" 
                className="form-control" 
                placeholder="Contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ paddingLeft: '35px' }}
              />
              <svg 
                style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 11H5V21H19V11Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
