import * as React from 'react';
import '../styles/Config.css'
import { Avatar,TextField} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const url = 'http://52.146.91.57:8080/api/administrador/administrador/2'

const Config = () => {
    const[usuarios, setUsuario] = useState([])
    

    const showData = async () => {
       axios.get(url).then(async (response) =>{
        const re= response.data
        console.log(re);
        setUsuario(re)
       })
    }

    useEffect( () =>{
        showData()
    }, [] )

    return(
        <div>
            <p className='textoAdmin'>Informacion del Trabajador</p>
            <Avatar id="AdminImagen" src={usuarios.foto_perfil}></Avatar>
            <label id='nombreC'>Nombre Completo:</label>
            <TextField className='nombreC' disabled value={usuarios.nombre +" "+ usuarios.apellido_paterno}/>
            <label id='correoC'>Correo:</label>
            <TextField className='correoC' disabled value={usuarios.correo}/>
            <label id='usuarioC'>Usuario:</label>
            <TextField className='usuarioC' disabled value={usuarios.usuario}/>
            
        </div>
    )
}

export default Config;