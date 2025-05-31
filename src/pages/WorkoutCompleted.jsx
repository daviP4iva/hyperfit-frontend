import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const WorkoutCompleted = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { day, calories, duration } = location.state || {};

  const handleBackToRoutine = () => {
    navigate('/generated-routine', { state: { completedDay: day } });
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '450px', margin: '0 auto', paddingTop: '60px', paddingBottom: '90px' }}>
        {/* Header */}
        <header style={{
          width: '100%', position: 'fixed', top: 0, left: 0, right: 0,
          background: 'white', borderBottom: '1px solid #f0f0f0', zIndex: 999
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 16px', height: '60px', maxWidth: '450px', margin: '0 auto'
          }}>
            <div style={{ width: '24px' }}></div>
            <h2 style={{ flex: 1, textAlign: 'center', color: '#8A2BE2' }}>HyperFit</h2>
            <div style={{ width: '24px' }}></div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ padding: '20px' }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            padding: '16px', 
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {/* Icono de éxito */}
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              backgroundColor: '#E8F5E9', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              margin: '0 auto 20px'
            }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 style={{ color: '#4CAF50', marginBottom: '10px' }}>¡Entrenamiento Completado!</h2>
            <p style={{ fontSize: '16px', marginBottom: '30px' }}>
              Has completado con éxito tu entrenamiento del día {day || '1'}
            </p>

            {/* Estadísticas */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-around',
              marginBottom: '30px'
            }}>
              <div>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto 10px'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#333" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p style={{ fontWeight: 'bold' }}>{duration || '25:30'}</p>
                <p>Tiempo</p>
              </div>
              
              <div>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto 10px'
                }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#333" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontWeight: 'bold' }}>{calories || '150'}</p>
                <p>Calorías</p>
              </div>
            </div>

            {/* Mensaje motivacional */}
            <div style={{ 
              backgroundColor: '#F0F8FF', 
              borderRadius: '10px', 
              padding: '15px',
              marginBottom: '30px'
            }}>
              <p style={{ fontSize: '14px' }}>
                <strong>HyperBot:</strong> ¡Excelente trabajo! Mantén este ritmo para alcanzar tus objetivos fitness.
              </p>
            </div>

            {/* Botón para volver a la rutina */}
            <button 
              onClick={handleBackToRoutine}
              style={{ 
                backgroundColor: '#8A2BE2', 
                color: 'white', 
                border: 'none', 
                padding: '12px', 
                borderRadius: '8px', 
                width: '100%',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Volver a mi rutina
            </button>
          </div>
        </main>

        {/* Bottom Nav */}
        <nav style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          maxWidth: '450px', margin: '0 auto', background: 'white',
          borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-around',
          padding: '10px 0', zIndex: 1000
        }}>
          <a href="/dashboard" className="nav-item active" style={{ textAlign: 'center', textDecoration: 'none', color: '#8A2BE2' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>Inicio</div>
          </a>

          <a href="/search" className="nav-item" style={{ textAlign: 'center', textDecoration: 'none', color: '#333' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 21L16.65 16.65"
                stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>Buscar</div>
          </a>

          <a href="/user-profile" className="nav-item" style={{ textAlign: 'center', textDecoration: 'none', color: '#333' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>Perfil</div>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default WorkoutCompleted;
