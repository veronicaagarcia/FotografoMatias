import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './assets/css/app.css';
import reportWebVitals from './reportWebVitals';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Galery from './components/Galery';
import Perfil from './components/Perfil'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <div> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="Admin/Perfil" element={<Perfil />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Galery" element={<Galery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      </React.StrictMode>
    );

    reportWebVitals();