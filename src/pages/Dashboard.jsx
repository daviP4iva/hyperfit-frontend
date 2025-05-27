import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTrainingClick = () => {
    navigate('/training');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  return (
    <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
      <div style={{ 
        maxWidth: '450px', 
        margin: '0 auto', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: 'white'
      }}>
        {/* Header */}
        <header className="header">
          <h2 className="logo">HyperFit</h2>
          <div 
            className="menu-icon" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M4 6H20M4 18H20" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={handleSettingsClick}>Ajustes</div>
              <div className="dropdown-item">Notificaciones</div>
              <div className="dropdown-item">Cerrar sesión</div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main style={{ 
          flex: 1, 
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0
          }}></div>
          
          <div style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1
          }}></div>
          
          <div style={{ 
            position: 'relative', 
            zIndex: 2,
            color: 'white',
            textAlign: 'left',
            padding: '20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h1 style={{ fontSize: '28px', marginBottom: '15px' }}>Entrena inteligentemente con <span style={{ color: '#8A2BE2' }}>HyperFit</span></h1>
            <p style={{ fontSize: '16px', marginBottom: '30px' }}>Rutinas de entrenamiento y nutrición personalizadas creadas por IA, adaptadas a tus objetivos, equipamiento y nivel de experiencia.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', maxWidth: '280px', margin: '10px 0' }}
                onClick={handleTrainingClick}
              >
                Entrenamiento
              </button>
              
              <button 
                className="btn btn-primary" 
                style={{ width: '100%', maxWidth: '280px', margin: '10px 0' }}
              >
                Nutrición
              </button>
            </div>
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

export default Dashboard;
