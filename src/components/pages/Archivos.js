import React from 'react';
import { Component } from 'react';
import Navbar from '../navigate/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabla from '../../services/TablaT';

class Archivos extends Component{

    render(){ 
        return(
            <>
        <Navbar/>
        <Box id="container">
            <Typography id="texto">Archivos</Typography>
            <Tabla></Tabla>
        </Box>
        </>
    )}
}



export default Archivos;