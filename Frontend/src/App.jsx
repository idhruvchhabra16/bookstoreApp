import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses';
import {Routes,Route, Navigate} from 'react-router-dom';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Contact from './contact/Contact';

function App() {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);

  return (
  <div className='bg-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses /> : <Navigate to="/signup" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
     
      </Routes>
      <Toaster />

  </div>
  )
}

export default App 