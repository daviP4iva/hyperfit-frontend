import React from "react";
import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="container">
      <header className="header">
        <span className="logo">
          <span className="logo-purple">Hyper</span>Fit
        </span>
        <span className="menu-icon">&#9776;</span>
      </header>
      <div className="main-image">
        {/* Puedes poner una imagen de fondo usando CSS */}
        <div className="overlay">
          <h1>
            Entrena inteligentemente<br />con <span className="highlight">HyperFit</span>
          </h1>
          <p className="description">
            Rutinas de entrenamiento y nutrición personalizadas creadas por IA, adaptadas a tus objetivos, equipamiento y nivel de experiencia.
          </p>
          <button className="main-btn">Entrenamiento</button>
          <button className="main-btn">Nutrición</button>
        </div>
      </div>
      <nav className="bottom-nav">
        <span className="nav-icon">🏠</span>
        <span className="nav-icon">🔍</span>
        <span className="nav-icon">👤</span>
      </nav>
    </div>
  );
}

export default HomeScreen;