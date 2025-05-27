import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const PersonalProfile = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [allergies, setAllergies] = useState('Ninguno');
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
            <input type="text" className="form-control" value="Personal" disabled />
          </div>
          
          <h3>Datos físicos:</h3>
          
          <div className="form-group">
            <label className="form-label">Altura:</label>
            <input 
              type="number" 
              className="form-control" 
              placeholder="Altura (m)" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Peso:</label>
            <input 
              type="number" 
              className="form-control" 
              placeholder="Peso (kg)" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Nivel:</label>
            <select 
              className="form-control" 
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option value="" disabled>Seleccionar nivel</option>
              <option value="principiante">Principiante</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Objetivo:</label>
            <select 
              className="form-control" 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            >
              <option value="" disabled>Seleccionar objetivo</option>
              <option value="perder_peso">Perder peso</option>
              <option value="ganar_musculo">Ganar músculo</option>
              <option value="mantener">Mantener</option>
              <option value="definir">Definir</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Alergenos:</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ninguno" 
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
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

export default PersonalProfile;
