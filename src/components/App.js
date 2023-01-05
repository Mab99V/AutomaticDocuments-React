import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './navigate/Navbar';
import Inicio from './pages/Inicio';
import Archivos from './pages/Archivos';
import Configuraciones from './pages/Configuraciones';
import Historial from './pages/Historial';
import Trabajadores from './pages/Trabajadores';
import Estudiantes from './pages/Estudiantes';

function App(){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/landingpage" element={<Navbar/>}/>
              <Route path="/landingpage/Inicio" element={<Inicio/>}/>
              <Route path="/landingpage/Historial" element={<Historial/>}/>
              <Route path="/landingpage/Archivos" element={<Archivos/>}/>
              <Route path="/landingpage/Configuraciones" element={<Configuraciones/>}/>
              <Route path="/landingpage/Trabajadores" element={<Trabajadores/>}/>
              <Route path="/landingpage/Estudiantes" element={<Estudiantes/>}/>              
          </Routes>
        </div>
      </div>
    </div>
   
 );
};

export default App;