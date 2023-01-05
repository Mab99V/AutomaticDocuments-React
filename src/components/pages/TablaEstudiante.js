
import React, { useState, useEffect } from 'react'; 
import { Edit, Delete} from '@material-ui/icons';
import {baseURL} from '../../services/api'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Modal,Button,TextField} from '@material-ui/core';
import '../../styles/Estudiantes.css';


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

const TablaEstudiante = () => {

    let url = baseURL + "/estudiantes/";
    let url2 = baseURL + "/estudiante/"
    const styles=useStyles();
    const[estu, setEstudiante]=useState([]);
    const[modalEdi,setModalEdi]=useState(false);
    const[modalEli,setModalEli]=useState(false);
    const[ search, setSearch] = useState("")

    //consolaseleccionada y setConsolaSeleccionada
    const [insert,setInser]=useState({
      id:'',
      id_carreras:'',
      id_facultades:'',
      nombre_completo:'',
      matricula:'',
      correo:'',
      contrasena:'',
      semestre:'',
      telefono:'',
      url:''
      
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
            setEstudiante(response.data)
        })
    }

    const peticionPut=async()=>{
      await axios.put(url2+insert.id,insert)
      .then(response=>{
        var dataNueva=estu;
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
        setEstudiante(dataNueva);
        abrircerrarModalEdi();
      })
    }

    const peticionDelete=async() =>{
      await axios.delete(url2+insert.id,insert)
      .then(response=>{
          setEstudiante(estu.filter(consola=>estu.id!==insert.id));
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
        <h3>Datos del Estudiante</h3>
        <TextField name="id" className={styles.inputMaterial} label="#ID" onChange={handleChange} value={insert && insert.id}/>
        <br />
        <TextField name="id_carreras" className={styles.inputMaterial} label="#Carreras" onChange={handleChange} value={insert && insert.id_carreras}/>
        <br />
        <TextField name="id_facultades" className={styles.inputMaterial} label="#Facultades" onChange={handleChange} value={insert && insert.id_facultades}/>
        <br />
        <TextField name="nombre_completo" className={styles.inputMaterial} label="Nombre Completo" onChange={handleChange} value={insert && insert.nombre_completo}/>
        <br />
        <TextField name="matricula" className={styles.inputMaterial} label="Matricula" onChange={handleChange} value={insert && insert.matricula}/>
        <br />
        <TextField name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange} value={insert && insert.correo}/>
        <br />
        <TextField  name="congtrasena" className={styles.inputMaterial} label="Contrasena" onChange={handleChange} value={insert && insert.contrasena}/>
        <br />
        <TextField name="semestre" className={styles.inputMaterial} label="Semestre" onChange={handleChange} value={insert && insert.semestre}/>
        <br />
        <TextField name="telefono" className={styles.inputMaterial} label="Telefono" onChange={handleChange}value={insert && insert.telefono}/>
        <br />
        <TextField name="url" className={styles.inputMaterial} label="URL" onChange={handleChange} value={insert && insert.foto_perfil}/>
        <br/> <br/>
        <div align="right">
          <Button color="primary" onClick={()=>peticionPut()}>Confirmar</Button>
          <Button onClick={()=>abrircerrarModalEdi()}>Cancelar</Button>
        </div>
      </div> 
    )

    const bodyElimi=(
      <div className={styles.modal}>
          <p id="p"> Seguro que desea eliminar a <b>{insert && insert.nombre_completo}</b></p>
    
        <div align="right">
          <Button color="secondary" onClick={()=>peticionDelete()}>Si</Button>
          <Button onClick={()=>abrircerrarModalElimi()}>No</Button>
        </div>
      </div> 
    )


    const resultados = !search ? estu : estu.filter((dato) => dato.nombre_completo.toLowerCase().includes(search.toLocaleLowerCase()))
  return (
    <div >
        <TextField  value={search} onChange={searcher}/>
      <br/>
      <TableContainer id="containerTable">
        <Table id="tabla"  sx={{ minWidth: 500 }} >
          <TableHead >
            <TableRow>
            <TableCell>#ID</TableCell>
            <TableCell>#Carreras</TableCell>
            <TableCell>#Facultades</TableCell>
            <TableCell align="right">Nombre Completo</TableCell>
            <TableCell align="right">Matricula</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="center">Contraseña</TableCell>
            <TableCell align="right">Semestre</TableCell>
            <TableCell align="right">Telefono</TableCell>
            <TableCell align="right">URL</TableCell>
            <TableCell align="right">Acciones</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
         {resultados.map((estu) =>(
        <TableRow key={estu.id}>
        <TableCell component="th" scope="row">
          {estu.id}
        </TableCell>
        <TableCell component="th" scope="row">
          {estu.id_carreras}
        </TableCell>
        <TableCell component="th" scope="row">
          {estu.id_facultades}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {estu.nombre_completo}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {estu.matricula}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {estu.correo}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {estu.contrasena}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {estu.semestre}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {estu.telefono}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {estu.foto_perfil}
        </TableCell>

        <TableCell style={{ width: 160 }} align="right">
          <Edit className={styles.iconos} onClick={()=> seleccionarConsola(estu, 'Editar')}/>
         &nbsp;&nbsp;&nbsp;
         <Delete className={styles.iconos} onClick={()=> seleccionarConsola(estu, 'Eliminar')}/>
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

export default TablaEstudiante