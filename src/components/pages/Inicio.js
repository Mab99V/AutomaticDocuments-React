import React from 'react';
import { Component } from 'react';
import Navbar from '../navigate/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import '../../styles/Inicio.css';

class Inicio extends Component{

    render(){ 
        return(
            <>
        <Navbar/>
        <Toolbar id="tex"/>
        <Box id="container">
            <Typography id="texto">Esta vivo Funciona</Typography>
        </Box>
        </>
    )}
}



export default Inicio;