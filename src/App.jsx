import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashboard from './pages/dashboard';
import EntryDetails from './Components/EntryDetails';
import ProtectedRoute from "./Components/ProtectedRoute";
import Header from './Components/Header';



const queryClient = new QueryClient()


function App() {
 

  return (
    <>
  
      <QueryClientProvider client={queryClient}>

      <Router>
        <Header />
          <Routes>
          <Route path="/" element={<Login />} />

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

          <Route path="/dashboard/entrydetails/:id" element={<ProtectedRoute><EntryDetails /></ProtectedRoute>} />


          </Routes>
        </Router>
        </QueryClientProvider>
    </>
  )
}

export default App
