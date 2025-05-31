import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const GeneratedRoutine = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { goal, level, days, completedDay } = location.state || {};
  const [routine, setRoutine] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completedDays, setCompletedDays] = useState([]);

  const handleBack = () => navigate(-1);

  useEffect(() => {
    // Actualizar los días completados si se recibe un nuevo día completado
    if (completedDay && !completedDays.includes(completedDay)) {
      setCompletedDays(prev => [...prev, completedDay]);
    }
  }, [completedDay, completedDays]);

  useEffect(() => {
    if (!goal || !level || !days) return;

    const fetchRoutine = async () => {
      try {
        const response = await fetch("http://localhost:8000/generate-routine", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ goal, level, days_per_week: days })
        });
        const data = await response.json();
        setRoutine(data);
      } catch (error) {
        console.log("Usando rutina simulada");
        setRoutine([
          {
            day: 1,
            exercises: [
              { name: "Sentadillas", video_url: "", instructions: "3 series de 15 repeticiones" },
              { name: "Flexiones", video_url: "", instructions: "3 series de 10 repeticiones" }
            ]
          },
          {
            day: 2,
            exercises: [
              { name: "Plancha", video_url: "", instructions: "3 series de 30 segundos" },
              { name: "Zancadas", video_url: "", instructions: "3 series de 12 repeticiones" }
            ]
          }
        ]);
        console.error("Error al generar rutina:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutine();
  }, [goal, level, days]);

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
            <button onClick={handleBack} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="24" height="24"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <h2 style={{ flex: 1, textAlign: 'center', color: '#8A2BE2' }}>Rutina Generada</h2>
            <div style={{ width: '24px' }}></div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ padding: '20px' }}>
          {loading ? (
            <p style={{ textAlign: 'center' }}>Generando rutina con IA...</p>
          ) : (
            routine.map((dia, index) => {
              const isDayCompleted = completedDays.includes(dia.day);
              
              return (
                <div key={index} style={{
                  backgroundColor: isDayCompleted ? '#E8F5E9' : '#f9f9f9', 
                  borderRadius: '12px', 
                  padding: '16px',
                  marginBottom: '20px', 
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  borderLeft: isDayCompleted ? '4px solid #4CAF50' : 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ margin: 0 }}>Día {dia.day}</h3>
                    {isDayCompleted && (
                      <div style={{ 
                        marginLeft: '10px', 
                        backgroundColor: '#4CAF50', 
                        color: 'white',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        fontSize: '12px'
                      }}>
                        Completado
                      </div>
                    )}
                  </div>
                  
                  <ul>
                    {dia.exercises.map((ej, i) => (
                      <li key={i}>
                        <strong>{ej.name}</strong>: {ej.instructions}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => navigate('/exercise-view', { state: { day: dia.day, exercises: dia.exercises } })}
                    style={{ 
                      marginTop: '10px', 
                      backgroundColor: isDayCompleted ? '#4CAF50' : '#8A2BE2', 
                      color: 'white', 
                      border: 'none', 
                      padding: '10px', 
                      borderRadius: '8px', 
                      width: '100%', 
                      cursor: 'pointer' 
                    }}
                  >
                    {isDayCompleted ? 'Repetir Día' : `Empezar Día ${index + 1}`}
                  </button>
                </div>
              );
            })
          )}
        </main>

        {/* Bottom Nav */}
        <nav style={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
          maxWidth: '450px', margin: '0 auto', background: 'white',
          borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-around',
          padding: '10px 0', zIndex: 1000
        }}>
          <Link to="/dashboard" className="nav-item active" style={{ textAlign: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Inicio</span>
          </Link>

          <Link to="/search" className="nav-item" style={{ textAlign: 'center' }}>
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
