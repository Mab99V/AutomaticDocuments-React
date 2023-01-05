import React, { useState, useEffect } from 'react'; 

import {baseURL} from '../../services/api'
import axios from 'axios';

import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button} from '@material-ui/core';
import '../../styles/Archivos.css';




const Tabla = () => {

    let url = baseURL + "/files/tramites/archivo/{nombre_archivo}";
    const[archivos, setArchivos]=useState([]);
   

    

    
    const peticionGet=async() =>{
        await axios.get(url)
        .then(response=>{
            setArchivos(response.data)
        })
    }

    
  
    useEffect(()=>{
         peticionGet();
    });
    


  return (
    <div >
      <br/>
      <TableContainer id="containerTable">
        <Table id="tabla"  sx={{ minWidth: 500 }} >
          <TableHead >
            <TableRow>
            <TableCell>#ID</TableCell>
            <TableCell>Nombre de los Archivos mandados</TableCell>
            <TableCell>Accion</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
         {archivos.map(archivos =>(
        <TableRow key={archivos.id}>
        <TableCell component="th" scope="row">
          {archivos.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {archivos.nombre_archivo}
        </TableCell>
        <TableCell component="th" scope="row">
          <Button> Eliminar </Button>
        </TableCell>
        
      </TableRow>
         ))}
      
  </TableBody>
  </Table>
  </TableContainer>

      
    </div>
  )
}

export default Tabla