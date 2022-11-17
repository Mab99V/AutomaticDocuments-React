import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../styles/narvar.css'

function Example() {
  const [show] = useState(true);

  return (
    <>
    
      <Offcanvas show={show}  backdrop="static">
      
          <Offcanvas.Title>Menu Principal</Offcanvas.Title>
       
        <Offcanvas.Body>
         <div>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
