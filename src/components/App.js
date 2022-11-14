import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Narvar from './navigate/narvar'


function App(){
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/test" element={<Narvar/>} />
          </Routes>
        </div>
      </div>
    </div>
   
 );
};

export default App;