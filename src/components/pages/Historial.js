import React from 'react';
import { Component } from 'react';
import Navbar from '../navigate/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TablaS from '../../services/TablaS'
import '../../styles/Historial.css'

class Historial extends Component{
    render(){ 
        return(
        <>
        <Navbar/>
        <Box id="containep" >
            <Typography id="textp">Historial</Typography>
            <TablaS/>
        </Box>
        </>
    )}
}


export default Historial;