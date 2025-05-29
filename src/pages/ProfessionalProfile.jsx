import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const ProfessionalProfile = () => {
  const [specialty, setSpecialty] = useState('');
  const [profileCount, setProfileCount] = useState(3);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save this data to a backend
    // For now, we'll just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="card">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#8A2BE2', margin: '0' }}>HyperFit</h2>
          <h1 style={{ margin: '10px 0' }}>Crear Perfil</h1>
          
          <div style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#f5f5f5', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            margin: '20px auto'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div style={{ textAlign: 'left', width: '100%' }}>
          <div className="form-group">
            <label className="form-label">Tipo de cuenta</label>
            <input type="text" className="form-control" value="Profesional" disabled />
          </div>
          
          <div className="form-group">
            <label className="form-label">Especialidad</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Nutricionista" 
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Nu00famero de perfiles</label>
            <input 
              type="number" 
              className="form-control" 
              placeholder="3" 
              value={profileCount}
              onChange={(e) => setProfileCount(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Descripciu00f3n corta</label>
            <textarea 
              className="form-control" 
              placeholder="Descru00edbete" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              required
            />
          </div>
        </div>
        
        <button 
          onClick={handleSubmit}
          className="btn btn-primary" 
          style={{ marginTop: '20px' }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
