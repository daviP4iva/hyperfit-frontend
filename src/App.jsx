import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PersonalProfile from './pages/PersonalProfile';
import ProfessionalProfile from './pages/ProfessionalProfile';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import Training from './pages/Training';
import './styles/App.css';
import GeneratedRoutine from './pages/GeneratedRoutine';
import Chatbot from './pages/Chatbot';
import Exercise from './pages/Exercise';
import ExerciseInProgress from './pages/ExerciseInProgress';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/personal-profile" element={<PersonalProfile />} />
          <Route path="/professional-profile" element={<ProfessionalProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/training" element={<Training />} />
          <Route path="/generated-routine" element={<GeneratedRoutine />} />
           <Route path="/chatbot" element={<Chatbot />} />
           <Route path="/exercise" element={<Exercise />} />
           <Route path="/exercise-in-progress" element={<ExerciseInProgress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
