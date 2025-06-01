import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Importa imágenes con Vite
const images = {};
const modules = import.meta.glob('../assets/*.gif', { eager: true });
Object.entries(modules).forEach(([path, mod]) => {
  const fileName = path.split('/').pop();
  images[fileName] = mod.default;
});

function getImageForExercise(nombre) {
  if (!nombre) return images['default.gif'];
  const fileName = nombre
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim() + '.gif';
  return images[fileName] || images['default.gif'];
}

function getEstimation(ejercicio) {
  const nombre = ejercicio?.nombre?.toLowerCase() || '';
  let tiempo = 2; // minutos
  let calorias = 2;
  let series = ejercicio?.series || 4;

  if (nombre.includes('sentadilla') || nombre.includes('peso muerto') || nombre.includes('prensa')) {
    tiempo = 4;
    calorias = 4;
  } else if (nombre.includes('plancha') || nombre.includes('planchas')) {
    tiempo = 1;
    calorias = 1;
  } else if (nombre.includes('dominada') || nombre.includes('fondos')) {
    tiempo = 3;
    calorias = 3;
  } else if (nombre.includes('crunch') || nombre.includes('rueda abdominal')) {
    tiempo = 1;
    calorias = 1;
  }
  return { tiempo, calorias, series };
}

const ExerciseProgress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ejercicio = location.state?.ejercicio;

  const { tiempo, calorias, series } = getEstimation(ejercicio);
  const [seconds, setSeconds] = useState(tiempo * 60);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const handleFinish = () => {
    navigate(-1);
  };

  const imgSrc = getImageForExercise(ejercicio?.nombre);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Header */}
      <div style={{
        width: '100%',
        maxWidth: 450,
        margin: '0 auto',
        padding: '16px 0 0 0',
        display: 'flex',
        alignItems: 'center'
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginLeft: 8
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h2 style={{
          flex: 1,
          textAlign: 'center',
          margin: 0,
          color: '#A084E8',
          fontWeight: 700,
          fontSize: 24,
          letterSpacing: 1
        }}>
          <span style={{ color: '#B9A9F7' }}>Hyper</span>Fit
        </h2>
        <div style={{ width: 32 }}></div>
      </div>

      {/* Card */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        margin: '32px 0 0 0',
        padding: 24,
        maxWidth: 400,
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: '0 0 16px 0', textAlign: 'center', fontWeight: 600 }}>¡Ejercicio en progreso!</h3>
        <img
          src={imgSrc}
          alt={ejercicio?.nombre || 'Ejercicio'}
          style={{
            width: 400,
            height: 280,
            objectFit: 'contain',
            borderRadius: 14,
            marginBottom: 18,
            background: '#f7f7fa'
          }}
        />
        <button
          onClick={() => navigate('/chatbot', { state: { ejercicio } })}
          style={{
            background: '#A084E8',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '4px 16px',
            fontWeight: 600,
            fontSize: 14,
            marginBottom: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 6
          }}
        >
          <span role="img" aria-label="bot" style={{ fontSize: 20 }}>🤖</span> HyperBot
        </button>
        {/* Iconos y datos */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 32,
          margin: '18px 0 18px 0'
        }}>
          {/* Tiempo (temporizador) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 14, color: '#222', marginTop: 2 }}>
              {`${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`}
            </span>
          </div>
          {/* Calorías */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 14, color: '#222', marginTop: 2 }}>{calorias} kcal</span>
          </div>
          {/* Series */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M6 20V10M12 20V4M18 20V14" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 14, color: '#222', marginTop: 2 }}>{series} series</span>
          </div>
        </div>
        <div style={{ marginBottom: 24, textAlign: 'center', fontWeight: 500 }}>
          {ejercicio?.nombre ? `¡Sigue así con ${ejercicio.nombre}!` : 'Sigue así, ¡tú puedes!'}
        </div>
        <button
          onClick={handleFinish}
          style={{
            width: '100%',
            background: '#A084E8',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '14px 0',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Terminar ejercicio
        </button>
      </div>
    </div>
  );
};

export default ExerciseProgress;