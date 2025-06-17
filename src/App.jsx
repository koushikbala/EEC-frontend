// src/app.jsx (keep this as your main app)
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Dashboard from './components/Dashboard' 
import ComplaintManagementSystem from './parents/ComplaintManagementSystem'
import AdminApp from './admin/AdminApp' 
import ProfileUpdate from './components/ProfileUpdate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/complaint" element={<ComplaintManagementSystem/>}/>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App