import React, { useState, useEffect } from 'react'; 
import { Edit, Delete} from '@material-ui/icons';
import {baseURL} from '../../services/api'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Modal,Button,TextField} from '@material-ui/core';
import '../../styles/Trabajadores.css';


const useStyles =makeStyles((theme) =>({
  modal:{
    position:'absolute',
    width:800,
    height:745,
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

const TablaTrabajadores = () => {

    let url = baseURL + "/secretarias/";
    let url2 = baseURL + "/secretaria/";
    const styles=useStyles();
    const[trabajadores, setTrabajadores]=useState([]);
    const[modalEdi,setModalEdi]=useState(false);
    const[modalEli,setModalEli]=useState(false);
    const[ search, setSearch] = useState("")
    //consolaseleccionada y setConsolaSeleccionada
    const [insert,setInser]=useState({
     id:'',
     id_facultades: '',
     nombre: '',
     apellido_paterno: '',
     apellido_materno: '',
     turno:'',
     telefono: '',
     matricula: '',
     correo: '',
     contrasena: '',
     direccion:'',
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
            setTrabajadores(response.data)
        })
    }

    const peticionPut=async()=>{
      await axios.put(url+insert.id,insert)
      .then(response=>{
        var dataNueva=trabajadores;
        dataNueva.map(consola=>{
          if(insert.id===consola.id){
            consola.id_carreras=insert.id_carreras;
            consola.id_facultades=insert.id_facultades;
            consola.nombre_completo=insert.nombre_completo;
            consola.matricula=insert.matricula;
            consola.correo=insert.correo;
            consola.contrasena=insert.contrasena;
            consola.semestre=insert.semestre;
            consola.telefono=insert.telefono;
            consola.foto_perfil=insert.foto_perfil;
          }
        })
        setTrabajadores(dataNueva);
        abrircerrarModalEdi();
      })
    }
    const peticionDelete=async() =>{
      await axios.delete(url2+`${insert.id_facultades}/${insert.id}`,insert)
      .then(response=>{
          setTrabajadores(trabajadores.filter(consola=>trabajadores.id!==insert.id));
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

  const searcher = (e) =>{
    setSearch(e.target.value)
    console.log(e)
}
  
    useEffect(()=>{
         peticionGet();
    });
    

    
    const bodyEdi=(
      <div className={styles.modal}>
        <h3>Datos de las Secretarias</h3>
        <TextField name="id" className={styles.inputMaterial} label="#ID" onChange={handleChange} value={insert && insert.id}/>
        <br />
        <TextField  name="id_facultades" className={styles.inputMaterial} label="#Facultades" onChange={handleChange} value={insert && insert.id_facultades}/>
        <br />
        <TextField   name="nombre" className={styles.inputMaterial} label="Nombre" onChange={handleChange} value={insert && insert.nombre}/>
        <br />
        <TextField  name="apellido_paterno" className={styles.inputMaterial} label="Apellido Paterno" onChange={handleChange} value={insert && insert.apellido_paterno}/>
        <br />
        <TextField   name="apellido_materno" className={styles.inputMaterial} label="Apellido Materno" onChange={handleChange} value={insert && insert.apellido_materno}/>
        <br />
        <TextField  name="turno" className={styles.inputMaterial} label="Turno" onChange={handleChange} value={insert && insert.turno}/>
        <br />
        <TextField  name="telefono" className={styles.inputMaterial} label="Telefono" onChange={handleChange} value={insert && insert.telefono}/>
        <br />
        <TextField   name="matricula" className={styles.inputMaterial} label="Matricula" onChange={handleChange} value={insert && insert.matricula}/>
        <br />
        <TextField  name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange} value={insert && insert.correo}/>
        <br />
        <TextField  name="contrasena" className={styles.inputMaterial} label="Contraseña" onChange={handleChange}value={insert && insert.contrasena}/>
        <br />
        <TextField   name="direccion" className={styles.inputMaterial} label="Direccion" onChange={handleChange} value={insert && insert.direccion}/>
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

    const resultados = !search ? trabajadores : trabajadores.filter((dato) => dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div >
       <TextField  value={search} onChange={searcher}/>
      <br/>
      <TableContainer id="containerTable">
        <Table id="tabla"  sx={{ minWidth: 500 }} >
          <TableHead >
            <TableRow>
            <TableCell>#ID</TableCell>
            <TableCell>#Facultades</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Apellido Paterno</TableCell>
            <TableCell align="right">Apellido Materno</TableCell>
            <TableCell align="right">Turno</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">Matricula</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="center">Contraseña</TableCell>
            <TableCell align="right">Direccion</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Acciones</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
         {resultados.map((trabajadores) =>(
        <TableRow key={trabajadores.id}>
        <TableCell component="th" scope="row">
          {trabajadores.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {trabajadores.id_facultades}
        </TableCell>
        <TableCell component="th" scope="row">
          {trabajadores.nombre}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.apellido_paterno}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.apellido_materno}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.turno}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.telefono}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.matricula}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.correo}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.contrasena}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.direccion}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {trabajadores.foto_perfil}
        </TableCell>
      

        <TableCell style={{ width: 160 }} align="right">
          <Edit className={styles.iconos} onClick={()=> seleccionarConsola(trabajadores, 'Editar')}/>
         &nbsp;&nbsp;&nbsp;
         <Delete className={styles.iconos} onClick={()=> seleccionarConsola(trabajadores, 'Eliminar')}/>
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

export default TablaTrabajadores