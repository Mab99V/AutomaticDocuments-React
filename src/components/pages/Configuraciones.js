import React from 'react';
import { Component } from 'react';
import Navbar from '../navigate/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Config from './Config';

class Configuraciones extends Component{

    render(){ 
        return(
            <>
        <Navbar/>
        <Box id="container">
            <Typography id="texto">Configuraciones</Typography>
            <Config></Config>
        </Box>
        </>
    )}
}



export default Configuraciones;