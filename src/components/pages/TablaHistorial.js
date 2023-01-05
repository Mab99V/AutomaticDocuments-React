import React, { useState, useEffect } from 'react'; 
import {baseURL} from '../../services/api'
import axios from 'axios';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,TextField,Button} from '@material-ui/core';
import '../../styles/Historial.css';



  
  const TablaHistorial = () => {
  
      let url = baseURL + "/solicitud-de-tramite/";
       

      const[usuarios, setUsuario] = useState([])
      
      const[ search, setSearch] = useState("")
      const [insert]=useState("")
  
   

      const peticionGet=async() =>{
        axios.get(url).then(async (response) =>{
        const re= response.data
        setUsuario(re)
       })
      }
      const peticionDelete=async() =>{
        await axios.delete(url+insert.id,insert)
        .then(response=>{
            setUsuario(usuarios.filter(consola=>usuarios.id));
            
        })
    }
  

     

      const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e)
    }
  
     
      useEffect(()=>{
           peticionGet();
           
      });
    
      
      const resultados = !search ? usuarios : usuarios.filter((dato) => dato.estado.toLowerCase().includes(search.toLocaleLowerCase()))
      
  
  
    return (
      <div >
        <TextField  value={search} onChange={searcher}/>
        <br/>
        <TableContainer id="containerTable">
          <Table id="tabla"  sx={{ minWidth: 500 }} >
            <TableHead >
              <TableRow>
              <TableCell>#ID</TableCell>
              <TableCell>#Secretaria</TableCell>
              <TableCell>#Tramite</TableCell>
              <TableCell>#Carrera</TableCell>
              <TableCell>#Estudiantes</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Fecha Solicitada</TableCell>
              <TableCell align="right">Fecha Aprobada</TableCell>
              <TableCell align="right">Acciones</TableCell>
              </TableRow>
          </TableHead>
  
          <TableBody>
           {resultados.map((usuario) =>(
          <TableRow key={usuario.id}>
          <TableCell component="th" scope="row">
            {usuario.id}
          </TableCell>
          <TableCell component="th" scope="row">
            {usuario.id_secretarias}
          </TableCell>
          <TableCell component="th" scope="row">
            {usuario.id_tramites}
          </TableCell>
          <TableCell component="th" scope="row">
            {usuario.id_carreras}
          </TableCell>
          <TableCell component="th" scope="row">
            {usuario.id_estudiantes}
          </TableCell>
          <TableCell component="th" scope="row">
            {usuario.datos_adjuntos_secretaria}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
            {usuario.estado}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
            {usuario.fecha_de_solicitud}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
            {usuario.fecha_de_aprobacion}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
          <Button color="primary" onClick={()=>peticionDelete()}>Eliminar</Button>
          </TableCell>
        </TableRow>
           ))}
        
    </TableBody>
    </Table>
    </TableContainer>
      </div>
    )
  }
export default TablaHistorial