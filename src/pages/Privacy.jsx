import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Privacy = () => {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ minHeight: '100vh', background: 'white', paddingTop: '60px', paddingBottom: '60px' }}>
      <div style={{ maxWidth: '450px', margin: '0 auto', padding: '24px' }}>
        <h2 style={{ color: '#8A2BE2', marginBottom: '18px' }}>Política de Privacidad</h2>
        <p style={{ color: '#444', fontSize: '16px', marginBottom: '24px', lineHeight: '1.6' }}>
          Nos tomamos muy en serio la privacidad de tus datos. Esta aplicación almacena únicamente la información necesaria para ofrecerte el mejor servicio posible. Nunca compartiremos tus datos personales con terceros sin tu consentimiento.<br /><br />
          Para más detalles sobre el uso de tus datos, revisa periódicamente esta sección. Si tienes preguntas, contacta con nuestro equipo de soporte.
        </p>
        <button onClick={() => navigate(-1)} className="btn btn-primary" style={{ background: '#8A2BE2', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 22px', fontWeight: 'bold' }}>
          Volver atrás
        </button>
      </div>
    </div>
  );
};

export default Privacy;
