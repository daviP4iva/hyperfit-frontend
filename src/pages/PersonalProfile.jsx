import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import userService from '../services/userService';

const PersonalProfile = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [level, setLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [allergies, setAllergies] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userService.updateProfile({
      height: height,
      weight: weight,
      level: level,
      goal: goal,
      allergies: allergies
    });
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <div className="card">
        <h1 style={{ margin: '10px 0' }}>Crear Perfil</h1>

        <div style={{ textAlign: 'left', width: '100%' }}>
          
          <h3>Datos físicos:</h3>
          
          <div className="form-group">
            <label className="form-label">Altura:</label>
            <input 
              type="number" 
              className="form-control" 
              placeholder="Altura (cm)" 
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
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="advanced">Avanzado</option>
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
              <option value="lose_weight">Perder peso</option>
              <option value="gain_muscle">Ganar músculo</option>
              <option value="maintain">Mantener</option>
              <option value="define">Definir</option>
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
          disabled={!height || !weight || !level || !goal}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default PersonalProfile;
