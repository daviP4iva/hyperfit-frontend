import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import '../styles/App.css';

const LISTA_EJERCICIOS = `
EJERCICIOS DE GIMNASIO - LISTA COMPLETA (20 EJERCICIOS)

--- EMPUJE (Pecho, Hombros, Tríceps) ---
1. Press de banca plano con barra 
2. Press militar con barra o mancuernas
3. Fondos en paralelas
4. Elevaciones laterales con mancuernas
5. Press de banca inclinado con mancuernas

--- TRACCIÓN (Espalda, Bíceps) ---
6. Dominadas (pull-ups o chin-ups)
7. Remo con barra o mancuerna 
8. Peso muerto convencional
9. Jalones al pecho en polea
10. Curl de bíceps con barra o mancuernas

--- PIERNAS (Cuádriceps, Isquios, Glúteos, Gemelos) ---
11. Sentadillas con barra
12. Prensa de piernas
13. Zancadas con mancuernas o barra
14. Peso muerto rumano

--- CORE (Abdominales y zona media) ---
16. Planchas 
17. Elevaciones de piernas colgado en barra o en banco
18. Crunch en máquina o en el suelo
19. Rueda abdominal

`;

const GeneratedRoutine = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { goal, level, daysPerWeek } = location.state || {};

  const [routine, setRoutine] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const safeGoal = goal || 'general';
    const safeLevel = level || 'principiante';
    const safeDays = daysPerWeek || 3;

    const currentParams = JSON.stringify({ goal: safeGoal, level: safeLevel, daysPerWeek: safeDays });
    const savedRoutine = sessionStorage.getItem('hyperfit_routine');
    const savedParams = sessionStorage.getItem('hyperfit_routine_params');

    if (savedRoutine && savedParams === currentParams) {
      setRoutine(JSON.parse(savedRoutine));
      setLoading(false);
      return;
    }

    const prompt = `
Utiliza únicamente los siguientes ejercicios para crear la rutina (no inventes otros):

${LISTA_EJERCICIOS}

Genera una rutina de ejercicios en formato JSON, es muy importante que sea JSON, no pongas marcaciones especiales, voy a importarlo tal cual me lo mandes, para ${safeDays} días, objetivo: ${safeGoal}, nivel: ${safeLevel}.
IMPORTANTE: Para cada día, el nombre debe ser exactamente "Día 1", "Día 2", "Día 3", etc. No uses nombres personalizados ni de grupos musculares.
Para cada día, incluye nombre, series y repeticiones por ejercicio. Solo responde con el JSON, sin explicaciones.
`;

    // 1. Pide la respuesta al modelo
    fetch('http://localhost:8000/api/v1/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_message: prompt })
    })
      .then(res => res.json())
      .then(data => {
        // 2. Envía la respuesta cruda al backend para procesar el JSON
        return fetch('http://localhost:8000/api/v1/process-routine', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ response: data.response })
        });
      })
      .then(res => res.json())
      .then(data => {
        const rutinaArray = data.routine || [];
        setRoutine(rutinaArray);
        sessionStorage.setItem('hyperfit_routine', JSON.stringify(rutinaArray));
        sessionStorage.setItem('hyperfit_routine_params', currentParams);
        setLoading(false);
      })
      .catch(() => {
        setRoutine([]);
        setLoading(false);
      });
  }, [goal, level, daysPerWeek]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartDay = (diaIndex) => {
    const ejercicios = routine[diaIndex]?.ejercicios || [];
    if (ejercicios.length > 0) {
      navigate('/exercise', { state: { ejercicios } });
    }
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
          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 60 }}>
              <div className="spinner"></div>
              <p style={{ color: '#8A2BE2', marginTop: 16, fontWeight: 500 }}>Generando tu rutina personalizada...</p>
            </div>
          ) : routine.length === 0 ? (
            <p>No se pudo generar la rutina. Intenta de nuevo.</p>
          ) : (
            routine.map((dia, index) => (
              <div key={index} style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '20px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{ marginBottom: '12px' }}>{`Día ${index + 1}`}</h3>
                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                  {(dia.ejercicios && dia.ejercicios.length > 0) ? (
                    dia.ejercicios.map((ej, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>
                        {ej.nombre}: {ej.series} x {ej.repeticiones}
                      </li>
                    ))
                  ) : (
                    <li style={{ color: '#888' }}>No hay ejercicios para este día.</li>
                  )}
                </ul>
                <button
                  onClick={() => handleStartDay(index)}
                  className="btn btn-primary"
                  style={{ width: '100%', backgroundColor: '#8A2BE2', color: 'white', padding: '10px', borderRadius: '8px' }}
                  disabled={(dia.ejercicios || []).length === 0}
                >
                  {(dia.ejercicios || []).length === 0 ? 'Sin ejercicios' : `Empezar Día ${index + 1}`}
                </button>
              </div>
            ))
          )}
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
