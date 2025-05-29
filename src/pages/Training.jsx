import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/App.css';

const Training = () => {
  const navigate = useNavigate();
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState('');

  const handleBack = () => {
    navigate(-1);
  };

  const handleGenerateRoutine = () => {
    // In a real app, you would call an AI service to generate a routine
    // For now, we'll just navigate back to the dashboard
    navigate('/generated-routine');
  };

  return (
    <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
      <div style={{ 
        maxWidth: '450px', 
        margin: '0 auto', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
      }}>
        {/* Header */}
        <header className="header" style={{ borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              onClick={handleBack} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                marginRight: '10px',
                padding: '5px'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h2 className="logo" style={{ color: '#8A2BE2', margin: 0 }}>HyperFit</h2>
          </div>
          
          <div className="menu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M4 6H20M4 18H20" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '20px' }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <h1 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>Generación de Rutina con IA</h1>
            
            <form style={{ textAlign: 'left' }}>
              <div className="form-group">
                <label className="form-label">Objetivo</label>
                <select 
                  className="form-control" 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  required
                >
                  <option value="" disabled selected>Selecciona tu objetivo</option>
                  <option value="perder_peso">Perder peso</option>
                  <option value="ganar_musculo">Ganar músculo</option>
                  <option value="tonificar">Tonificar</option>
                  <option value="resistencia">Mejorar resistencia</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Nivel de experiencia</label>
                <select 
                  className="form-control" 
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  required
                >
                  <option value="" disabled selected>Selecciona tu nivel</option>
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Días por semana</label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Número de días" 
                  min="1" 
                  max="7"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(e.target.value)}
                  required
                />
              </div>
              
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ marginTop: '20px', width: '100%' }}
                onClick={handleGenerateRoutine}
              >
                Generar Rutina
              </button>
            </form>
          </div>
        </main>

        {/* Navigation Bar */}
        <div style={{ position: 'relative', width: '100%' }}>
          <nav className="nav-bar" style={{ left: '0', right: '0', margin: '0 auto' }}>
            <Link to="/dashboard" className="nav-item active">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Inicio</span>
            </Link>
            
            <Link to="/search" className="nav-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Buscar</span>
            </Link>
            
            <Link to="/user-profile" className="nav-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Perfil</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Training;
