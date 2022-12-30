import React from 'react';
import { Component } from 'react';
import Archive  from '@material-ui/icons/FolderOpen';
import Navbar from '../navigate/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../../styles/Inicio.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


class Inicio extends Component{

    render(){ 
        return(
            <>
        <Navbar/>
        <Box id="container">
            <Typography id="texto">Acceder</Typography>
    <Stack direction="row" spacing={2} alignItems="flex-start" justifyContent="center">
      <Button id="bh" variant="outlined" href="/landingpage/Historial"><Archive></Archive>Historial de Documentos</Button>
      <Button id="be" variant="outlined" href="/landingpage/Estudiantes"><Archive></Archive> Estudiantes</Button>
      <Button id="bs" variant="outlined" href="/landingpage/Trabajadores"><Archive></Archive> Secretarias</Button>
    </Stack>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Trabajador</TableCell>
            <TableCell align="right">Puesto</TableCell>
            <TableCell align="right">Fecha de registro</TableCell>
            <TableCell align="right">Dirección Particular</TableCell>
            <TableCell align="right">Programas educativos</TableCell>
            <TableCell align="right">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
    </TableContainer>
        </Box>
        </>
    )}
}


export default Inicio;