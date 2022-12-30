import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import '../styles/Historial.css';
import Dialog from "./Dialog";

const URL ='http://52.146.91.57:8080/api/solicitud-de-tramite'

const Tabla = () => {
    const[usuarios, setUsuario] = useState([])
    const[ search, setSearch] = useState("")
    

    const showData = async () => {
       axios.get(URL).then(async (response) =>{
        const re= response.data
        console.log(re);
        setUsuario(re)
       })
    }

    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e)
    }
    
    // let resultados=[]
    // if(!search)
    // {
    //     resultados=usuarios
    // }else{
    //     resultados=usuarios.filter( (dato) =>
    //     dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
    // }

    const resultados = !search ? usuarios : usuarios.filter((dato) => dato.estado.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect( () =>{
        showData()
    }, [] )

    return(
        <div>
            <input value={search} onChange={searcher} type="text" placeholder="Search" className="form-control"></input>
            <table id='tabla' >
                <thead>
                    <tr className="bg-curso text-white">
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Fecha Tramite</th>
                        <th>Estado</th>
                        <th>Fecha de entrega</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    { resultados.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.datos_adjuntos_secretaria}</td>
                            <td>{usuario.id_carreras}</td>
                            <td>{usuario.fecha_de_solicitud}</td>
                            <td>{usuario.estado}</td>
                            <td>{usuario.fecha_de_aprobacion}</td>
                            <td><Dialog/></td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default Tabla;