import React from 'react';
import { Component } from 'react';
import Navbar from '../navigate/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class Historial extends Component{

    render(){ 
        return(
            <>
        <Navbar/>
        <Box id="container">
            <Typography id="texto">Historial</Typography>
        </Box>
        </>
    )}
}


export default Historial;