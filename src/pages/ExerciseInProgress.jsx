import React from 'react';
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

const ExerciseProgress = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ejercicio = location.state?.ejercicio;

  const handleFinish = () => {
    navigate(-1); // Vuelve a la pantalla anterior o cambia la ruta según tu flujo
  };

  const imgSrc = getImageForExercise(ejercicio?.nombre);

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
        borderRadius: 16,
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        margin: '32px 0 0 0',
        padding: 24,
        maxWidth: 340,
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h3 style={{ margin: '0 0 16px 0', textAlign: 'center', fontWeight: 600 }}>¡Ejercicio en progreso!</h3>
        <img
          src={imgSrc}
          alt={ejercicio?.nombre || 'Ejercicio'}
          style={{
            width: 340,
            height: 240,
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