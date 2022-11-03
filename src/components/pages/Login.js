import React, { Component } from "react";
import '../../styles/LoginS.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class Login extends Component {


state={
  form:{
    username:'',
    password:''
  }
}

handleChange = async e => {
   await this.setState({
    form:{
    ...this.state.form,
    [e.target.name]: e.target.value
    }
  });
  console.log(this.state.form);
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
         <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Correo electronico</Form.Label>
           <Form.Control type="email" placeholder="Ingrese correo electronico" name="username" onChange={this.handleChange}/>
             
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Contraseña</Form.Label>
               <Form.Control type="password" placeholder="Ingrese contraseña" name="password" onChange={this.handleChange}/>
           
           </Form.Group>
               <Button variant="dark" type="submit">
                  Ingresar
               </Button>
           </Form>
        </div>
    </div>
 

    
    );
    
 }
}
export default Login;