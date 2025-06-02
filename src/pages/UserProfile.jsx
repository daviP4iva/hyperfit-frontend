import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/App.css';

const UserProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: 'white', position: 'relative' }}>
      
      {/* HEADER FIJO */}
      <header
        style={{
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'white',
          borderBottom: '1px solid #f0f0f0',
          zIndex: 999,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px',
            height: '60px',
            maxWidth: '450px',
            margin: '0 auto',
          }}
        >
          <button
            onClick={handleBack}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <h2 style={{ flex: 1, textAlign: 'center', margin: 0, color: '#8A2BE2' }}>HyperFit</h2>

          <div style={{ width: '24px' }}></div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <div
        style={{
          margin: '60px auto 80px',
          maxWidth: '450px',
          padding: '20px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Foto de perfil */}
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '30px 0 20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Nombre */}
        <h2 style={{ margin: '10px 0', color: '#333' }}>@alexhyperfit</h2>

        {/* Botón editar */}
        <button
          className="btn btn-primary"
          style={{
            width: '200px',
            margin: '20px 0',
            backgroundColor: '#8A2BE2',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '16px',
          }}
          onClick={handleEditProfile}
        >
          Editar perfil
        </button>
      </div>

      {/* NAVBAR FIJA ABAJO */}
      <nav
        className="nav-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'white',
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '10px 0',
          zIndex: 999,
          maxWidth: '450px',
          margin: '0 auto',
        }}
      >
        <Link to="/dashboard" className="nav-item" style={{ textAlign: 'center' }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Inicio</span>
        </Link>

        <Link to="/coming-soon" className="nav-item" style={{ textAlign: 'center' }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L16.65 16.65"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Buscar</span>
        </Link>

        <Link to="/user-profile" className="nav-item active" style={{ textAlign: 'center' }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="#8A2BE2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#8A2BE2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Perfil</span>
        </Link>
      </nav>
    </div>
  );
};

export default UserProfile;
