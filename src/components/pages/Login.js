import React, { Component } from "react";
import '../../styles/LoginS.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
//servicio
import { Apiurl } from "../../services/apirest";
//biblioteca
import axios from 'axios';
class Login extends Component {

  state={
    form:{
     
      "usuario":"",
      "correo":"",
      "contrasena":""
    },
    error: false,
    errorMsg:""
  }



  manejadorSubmit(e){
    e.preventDefault();
  }

  handleChange = async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  manejadorBoton=()=>{
    
    let url = Apiurl + "/administrador/ingresar";
    axios.post(url,this.state.form)
    .then(response =>{
      console.log(response)
      if(response.data.status === 200){
       localStorage.setItem("token",response.data.token);
      
      }else {
        this.setState({
          error: true,
          //errorMsg: response.data
        })
      }
    }).catch( error =>{
      console.log(error);
      this.setState({
        error: true,
        errorMsg: "Error de autenticacion"
      })
    })
  }

render(){
        return(
      <div className='containerprincipal'>
     
     <img src="http://placeimg.com/374/500/nature" className="animada"   alt="..." />
        <div className='container1'>
        <img src="./images/Luzio.png" className="d-block"   alt="..." />
        <center><h3>Ingresar</h3></center>
        <p>Solo personal autorizado</p>
        <br></br>
         <Form onSubmit={this.manejadorSubmit}>
         <Form.Group className="mb-3" controlId="formU">
           <Form.Label className="usuario">Usuario</Form.Label>
           <Form.Control type="text" placeholder="Ingrese usuario" name="usuario" onChange={this.handleChange}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formE">
           <Form.Label className="ce">Correo electronico</Form.Label>
           <Form.Control type="email" placeholder="Ingrese correo electronico" name="correo" onChange={this.handleChange}/>
           </Form.Group> 
           <Form.Group className="mb-3" controlId="formP">
             <Form.Label className="co">Contraseña</Form.Label>
               <Form.Control type="password" placeholder="Ingrese contraseña" name="contrasena" onChange={this.handleChange}/>
           
           </Form.Group>
               <Button  variant="dark" type="submit" onClick={this.manejadorBoton}>
                  Ingresar
               </Button>  
           </Form>
           {this.state.error === true &&
               <div className="alert alert-danger" role="alert">
                     {this.state.errorMsg}
                     
              </div>
               }
          
        </div>
    </div>
    );
    
 }
}
export default Login;