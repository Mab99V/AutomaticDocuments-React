import React from 'react';
import { Component } from 'react';
import Navbar from '../navigate/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

class Trabajadores extends Component{

    render(){ 
        return(
            <>
        <Navbar/>
        <Toolbar/>
        <Box>
            <Typography>Esta vivo Funciona desde Trabajadores</Typography>
        </Box>
        </>
    )}
}


export default Trabajadores;