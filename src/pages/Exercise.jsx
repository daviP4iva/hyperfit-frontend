import React, { useState } from 'react';
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

// Estimaciones simples por tipo de ejercicio
function getEstimation(ejercicio) {
  const nombre = ejercicio.nombre.toLowerCase();
  let tiempo = 2; // minutos
  let calorias = 2;
  let series = ejercicio.series || 4;

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

const Exercise = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ejercicios = location.state?.ejercicios || [];
  const [current, setCurrent] = useState(0);

  if (!ejercicios.length) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h2>No hay ejercicios para mostrar.</h2>
        <button onClick={() => navigate(-1)} style={{ marginTop: 20 }}>Volver</button>
      </div>
    );
  }

  const ejercicio = ejercicios[current];
  if (!ejercicio) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h2>Ejercicio no encontrado.</h2>
        <button onClick={() => navigate(-1)} style={{ marginTop: 20 }}>Volver</button>
      </div>
    );
  }

  const handleNext = () => {
    navigate('/exercise-in-progress', { state: { ejercicio } });
  };

  const handleHyperBot = () => {
    // Cambia la ruta según tu app, por ejemplo:
    navigate('/chatbot', { state: { ejercicio } });
  };

  const imgSrc = getImageForExercise(ejercicio.nombre);
  const { tiempo, calorias, series } = getEstimation(ejercicio);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
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
        borderRadius: 18,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        margin: '32px 0 0 0',
        padding: 24,
        maxWidth: 370,
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h3 style={{
          margin: '0 0 18px 0',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: 22
        }}>
          Entrenamiento
        </h3>
        <img
          src={imgSrc}
          alt={ejercicio.nombre}
          style={{
            width: 340,
            height: 240,
            objectFit: 'contain',
            borderRadius: 14,
            marginBottom: 18,
            background: '#f7f7fa'
          }}
        />

        {/* HyperBot */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 10 }}>
          <button
            onClick={handleHyperBot}
            style={{
              background: '#A084E8',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '4px 16px',
              fontWeight: 600,
              fontSize: 14,
              marginBottom: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}
          >
            <span role="img" aria-label="bot" style={{ fontSize: 20 }}>🤖</span> HyperBot
          </button>
          <div style={{ fontSize: 15, color: '#444', textAlign: 'center' }}>
            {ejercicio.nombre}
            {ejercicio.series && ejercicio.repeticiones && (
              <span style={{ fontSize: 14, color: '#888' }}>
                {' '}({ejercicio.series}x{ejercicio.repeticiones})
              </span>
            )}
          </div>
        </div>

        {/* Iconos de info */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 32,
          margin: '18px 0 18px 0'
        }}>
          {/* Tiempo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: 14, color: '#222', marginTop: 2 }}>{tiempo.toString().padStart(2, '0')}:00</span>
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

        <button
          onClick={handleNext}
          style={{
            width: '100%',
            background: '#A084E8',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '14px 0',
            fontSize: 16,
            fontWeight: 600,
            cursor: 'pointer',
            marginTop: 10
          }}
        >
          Iniciar ejercicio
        </button>
      </div>
    </div>
  );
};

export default Exercise;