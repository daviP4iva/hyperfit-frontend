import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/App.css';

const fakeRoutine = [
  {
    dia: 1,
    ejercicios: [
      { nombre: 'Sentadillas', series: 3, repeticiones: 15 },
      { nombre: 'Flexiones', series: 3, repeticiones: 12 },
      { nombre: 'Plancha', series: 3, repeticiones: '30 seg' },
    ],
  },
  {
    dia: 2,
    ejercicios: [
      { nombre: 'Zancadas', series: 3, repeticiones: 10 },
      { nombre: 'Mountain Climbers', series: 3, repeticiones: 20 },
    ],
  },
  {
    dia: 3,
    ejercicios: [
      { nombre: 'Burpees', series: 3, repeticiones: 12 },
      { nombre: 'Abdominales', series: 4, repeticiones: 20 },
    ],
  },
];

const GeneratedRoutine = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartDay = (dia) => {
    alert(`¡Empezando Día ${dia + 1}! (Aquí iría la pantalla de entrenamiento)`);
    // Más adelante: navigate(`/training-day/${dia + 1}`);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'white', position: 'relative' }}>
      <div style={{ maxWidth: '450px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <header style={{
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'white',
          borderBottom: '1px solid #f0f0f0',
          zIndex: 999
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            height: '60px',
            maxWidth: '450px',
            margin: '0 auto'
          }}>
            <button onClick={handleBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <h2 style={{ flex: 1, textAlign: 'center', margin: 0, color: '#8A2BE2' }}>Rutina Generada</h2>
            <div style={{ width: '24px' }}></div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ flex: 1, marginTop: '60px', marginBottom: '90px', padding: '20px' }}>
          {fakeRoutine.map((dia, index) => (
            <div key={index} style={{
              backgroundColor: '#f9f9f9',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ marginBottom: '12px' }}>Día {index + 1}</h3>
              <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                {dia.ejercicios.map((ej, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>
                    {ej.nombre}: {ej.series} x {ej.repeticiones}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleStartDay(index)}
                className="btn btn-primary"
                style={{ width: '100%', backgroundColor: '#8A2BE2', color: 'white', padding: '10px', borderRadius: '8px' }}
              >
                Empezar Día {index + 1}
              </button>
            </div>
          ))}
        </main>

        {/* Bottom Nav */}
        <nav style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: '450px',
          margin: '0 auto',
          background: 'white',
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px 0',
          zIndex: 1000
        }}>
          <Link to="/dashboard" className="nav-item active" style={{ textAlign: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Inicio</span>
          </Link>

          <Link to="/coming-soon" className="nav-item" style={{ textAlign: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 21L16.65 16.65"
                stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Buscar</span>
          </Link>

          <Link to="/user-profile" className="nav-item" style={{ textAlign: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Perfil</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default GeneratedRoutine;
