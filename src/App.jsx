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
import ExerciseView from './pages/ExerciseView';
import WorkoutCompleted from './pages/WorkoutCompleted';


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
          <Route path="/exercise-view" element={<ExerciseView />} />
          <Route path="/workout-completed" element={<WorkoutCompleted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
