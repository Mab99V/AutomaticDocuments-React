import React, { useState, useEffect } from 'react'; 
import { Edit, Delete} from '@material-ui/icons';
import {baseURL} from '../../services/api'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Modal,Button,TextField} from '@material-ui/core';
import '../../styles/Inicio.css';


const useStyles =makeStyles((theme) =>({
  modal:{
    position:'absolute',
    width:400,
    backgroundColor:theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow:theme.shadows[5],
    padding: theme.spacing(2,4,3),
    top: '50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
  },
  iconos:{
    cursor: 'pointer'
  },
  inputMaterial:{
    width:'100%'
  }
}));

const TablaInicio = () => {

    let url = baseURL + "/administradores/";
    let url2 = baseURL + "/administrador/"
    const styles=useStyles();
    const[admin, setAdmin]=useState([]);
    const[modalEdi,setModalEdi]=useState(false);
    const[modalEli,setModalEli]=useState(false);
    //consolaseleccionada y setConsolaSeleccionada
    const [insert,setInser]=useState({
     id:'',
     id_facultades: '',
     usuario: '',
     correo: '',
     contrasena: '',
     nombre:'',
     apellido_paterno: '',
     apellido_materno: '',
     foto_perfil: ''
      
    })

    const handleChange=e=>{
      const {name,value}=e.target;
      setInser(prevState=>({
        ...prevState,
        [name]: value
      }))
      console.log(insert)
    }
    const peticionGet=async() =>{
        await axios.get(url)
        .then(response=>{
            setAdmin(response.data)
        })
    }

    const peticionPut=async()=>{
      await axios.put(url2+`${insert.id_facultades}/${insert.id}`,insert)
      .then(response=>{
        var dataNueva=admin;
        dataNueva.map(consola=>{
          if(insert.id===consola.id){
            consola.id_facultades=insert.id_facultades;
            consola.usuario=insert.usuario;
            consola.correo=insert.correo;
            consola.contrasena=insert.contrasena;
            consola.nombre=insert.nombre;
            consola.apellido_paterno=insert.apellido_paterno;
            consola.apellido_materno=insert.apellido_materno;
            consola.foto_perfil=insert.foto_perfil;
          }
        })
        setAdmin(dataNueva);
        abrircerrarModalEdi();
      })
    }
    const peticionDelete=async() =>{
      await axios.delete(url2+`${insert.id_facultades}/${insert.id}`,insert)
      .then(response=>{
          setAdmin(admin.filter(consola=>admin.id!==insert.id));
          abrircerrarModalElimi();
      })
  }
   
  const abrircerrarModalEdi=()=>{
    setModalEdi(!modalEdi);
}
const abrircerrarModalElimi=()=>{
  setModalEli(!modalEli);
}
const seleccionarConsola=(consola,caso)=>{
  setInser(consola);
  (caso==='Editar')?abrircerrarModalEdi(true):abrircerrarModalElimi()
  
}
  
    useEffect(()=>{
         peticionGet();
    });
    

    
    const bodyEdi=(
      <div className={styles.modal}>
        <h3>Datos del Administrador</h3>
        <TextField  name="id" className={styles.inputMaterial} label="#ID" onChange={handleChange} value={insert && insert.id}/>
        <br />
        <TextField  name="id_facultades" className={styles.inputMaterial} label="#Facultades" onChange={handleChange} value={insert && insert.id_facultades}/>
        <br />
        <TextField   name="usuario" className={styles.inputMaterial} label="Usuario" onChange={handleChange} value={insert && insert.usuario}/>
        <br />
        <TextField  name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange} value={insert && insert.correo}/>
        <br />
        <TextField  name="contrasena" className={styles.inputMaterial} label="Contraseña" onChange={handleChange}value={insert && insert.contrasena}/>
        <br />
        <TextField   name="nombre" className={styles.inputMaterial} label="Nombre" onChange={handleChange}value={insert && insert.nombre}/>
        <br />
        <TextField  name="apellido_paterno" className={styles.inputMaterial} label="Apellido Paterno" onChange={handleChange} value={insert && insert.apellido_paterno}/>
        <br />
        <TextField   name="apellido_materno" className={styles.inputMaterial} label="Apellido Materno" onChange={handleChange} value={insert && insert.apellido_materno}/>
        <br />
        <TextField   name="url" className={styles.inputMaterial} label="URL" onChange={handleChange} value={insert && insert.foto_perfil}/>
        <br/> <br/>
        <div align="right">
          <Button color="primary" onClick={()=>peticionPut()}>Confirmar</Button>
          <Button onClick={()=>abrircerrarModalEdi()}>Cancelar</Button>
        </div>
      </div> 
    )
    const bodyElimi=(
      <div className={styles.modal}>
          <p id="p"> Seguro que desea eliminar a <b>{insert && insert.nombre}</b></p>
    
        <div align="right">
          <Button color="secondary" onClick={()=>peticionDelete()}>Si</Button>
          <Button onClick={()=>abrircerrarModalElimi()}>No</Button>
        </div>
      </div> 
    )

  return (
    <div >
      <br/>
      <TableContainer id="containerTable">
        <Table id="tabla"  sx={{ minWidth: 500 }} >
          <TableHead >
            <TableRow>
            <TableCell>#ID</TableCell>
            <TableCell>#Facultades</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="center">Contraseña</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido Paterno</TableCell>
            <TableCell align="right">Apellido Materno</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Acciones</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
         {admin.map(admin =>(
        <TableRow key={admin.id}>
        <TableCell component="th" scope="row">
          {admin.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {admin.id_facultades}
        </TableCell>
        <TableCell component="th" scope="row">
          {admin.usuario}
        </TableCell>
        <TableCell component="th" scope="row">
          {admin.correo}
        </TableCell>
        <TableCell component="th" scope="row">
          {admin.contrasena}
        </TableCell>
        <TableCell component="th" scope="row">
          {admin.nombre}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {admin.apellido_paterno}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {admin.apellido_materno}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {admin.foto_perfil}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          <Edit className={styles.iconos} onClick={()=> seleccionarConsola(admin, 'Editar')}/>
         &nbsp;&nbsp;&nbsp;
         <Delete className={styles.iconos}  onClick={()=> seleccionarConsola(admin, 'Eliminar')}/>
        </TableCell>
      </TableRow>
         ))}
      
  </TableBody>
  </Table>
  </TableContainer>

      <Modal
        open={modalEdi}
        onClose={abrircerrarModalEdi}>
        {bodyEdi}
      </Modal>

      <Modal
        open={modalEli}
        onClose={abrircerrarModalElimi}>
        {bodyElimi}
      </Modal>
    </div>
  )
}

export default TablaInicio