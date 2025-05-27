//import LoginPage from './pages/LoginPage/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import SignUpPage from './pages/SignUpPage/SignUpPage'
import HomeScreen from './components/HomeScreen/HomeScreen'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/*<Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
