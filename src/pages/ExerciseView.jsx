import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ExerciseView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { day, exercises } = location.state || {};
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [calories, setCalories] = useState(0);
  const [completedSeries, setCompletedSeries] = useState(0);
  const [totalSeries, setTotalSeries] = useState(4); // Valor predeterminado

  const currentExercise = exercises?.[currentExerciseIndex] || {};

  // Extraer información de series del texto de instrucciones
  useEffect(() => {
    if (currentExercise.instructions) {
      const seriesMatch = currentExercise.instructions.match(/(\d+)\s*series/i);
      if (seriesMatch && seriesMatch[1]) {
        setTotalSeries(parseInt(seriesMatch[1], 10));
      }
    }
  }, [currentExercise]);

  // Efecto para el temporizador
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
        // Incrementar calorías quemadas (simulado)
        if (timer % 10 === 0) { // Cada 10 segundos
          setCalories(prev => prev + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleBack = () => navigate(-1);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(prevIndex => prevIndex + 1);
      setCompletedSeries(0); // Reiniciar series completadas
    } else {
      // Último ejercicio completado, ir a la pantalla de entrenamiento finalizado
      navigate('/workout-completed', { 
        state: { 
          day, 
          calories, 
          duration: formatTime(timer)
        } 
      });
    }
  };

  const handleCompleteSeries = () => {
    if (completedSeries < totalSeries) {
      setCompletedSeries(prev => prev + 1);
    }
  };

  const handleCompleteExercise = () => {
    // Marcar ejercicio como completado y pasar al siguiente
    handleNextExercise();
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
            <button onClick={handleBack} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="24" height="24"><path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <h2 style={{ flex: 1, textAlign: 'center', color: '#8A2BE2' }}>HyperFit</h2>
            <div style={{ width: '24px' }}></div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ padding: '20px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '15px' }}>Entrenamiento</h3>
            
            {/* Video del ejercicio */}
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              height: '200px', 
              backgroundColor: '#f0f0f0', 
              borderRadius: '8px',
              marginBottom: '15px',
              overflow: 'hidden'
            }}>
              {currentExercise.video_url ? (
                <video 
                  src={currentExercise.video_url} 
                  controls 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  height: '100%',
                  backgroundColor: '#f0f0f0'
                }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M5 3L19 12L5 21V3Z" fill="#8A2BE2" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* HyperBot */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="12" rx="2" stroke="#333" strokeWidth="2" />
                <circle cx="9" cy="10" r="2" fill="#333" />
                <circle cx="15" cy="10" r="2" fill="#333" />
                <path d="M7 16v2a2 2 0 002 2h6a2 2 0 002-2v-2" stroke="#333" strokeWidth="2" />
              </svg>
              <div style={{ 
                backgroundColor: '#8A2BE2', 
                color: 'white', 
                padding: '5px 15px',
                borderRadius: '20px',
                marginTop: '5px',
                fontSize: '14px'
              }}>
                HyperBot
              </div>
            </div>

            {/* Nombre e instrucciones del ejercicio */}
            <p style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '5px' }}>
              {currentExercise.name || 'Press banca con barra'} {currentExercise.weight ? `(${currentExercise.weight})` : '(7x15kg)'}
            </p>

            {/* Métricas */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginTop: '20px',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#333" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p style={{ marginTop: '5px', fontSize: '14px' }}>{formatTime(timer)}</p>
              </div>
              
              <div>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#333" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ marginTop: '5px', fontSize: '14px' }}>{calories} kcal</p>
              </div>
              
              <div>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0 auto'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9v-2a2 2 0 012-2h8a2 2 0 012 2v2M6 9h12M6 9v10a2 2 0 002 2h8a2 2 0 002-2V9" stroke="#333" strokeWidth="2" />
                    <path d="M9 13v4M15 13v4" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <p style={{ marginTop: '5px', fontSize: '14px' }}>{completedSeries}/{totalSeries} series</p>
              </div>
            </div>

            {/* Botón para completar serie o ejercicio */}
            <button 
              onClick={completedSeries < totalSeries ? handleCompleteSeries : handleCompleteExercise}
              style={{ 
                marginTop: '15px',
                backgroundColor: completedSeries < totalSeries ? '#8A2BE2' : '#4CAF50', 
                color: 'white', 
                border: 'none', 
                padding: '12px', 
                borderRadius: '8px', 
                width: '100%',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              {completedSeries < totalSeries ? 'Serie completada' : 'Ejercicio completado'}
            </button>

            {/* Ya no necesitamos un botón adicional para el siguiente ejercicio */}
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

export default ExerciseView;
