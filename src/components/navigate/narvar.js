import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faHome, faUser, faBook, faUserGroup,faUserClock, faTools } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Example() {
  const [show] = useState(true);

  return (
    <>
    
      <Offcanvas show={show}  backdrop="static">
      
          <Offcanvas.Title>Menu Principal</Offcanvas.Title>
       
        <Offcanvas.Body>
          <div>
         <FontAwesomeIcon icon={faHome} color="blue"/>  Inicio
         <br/>
         <FontAwesomeIcon icon={faUser} />  Inicio
         <br/>
         <FontAwesomeIcon icon={faBook} />  Inicio
         <br/>
         <FontAwesomeIcon icon={faUserGroup} />  Inicio
         <br/>
         <FontAwesomeIcon icon={faUserClock} />  Inicio
         <br/>
         <FontAwesomeIcon icon={faTools} />  Inicio
         <br/>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;