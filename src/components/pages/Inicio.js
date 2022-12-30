import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../navigate/Navbar'
import '../../styles/Inicio.css';

import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Archive  from '@material-ui/icons/FolderOpen';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const drawerWidth = 240;
  
const rows = [
  createData('Trabajador', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {

  const [open] = React.useState(false);

  

 

  return (
    <div className="container" >
    <div className="row">
       <div className="col md-4">
   
    <Box  sx={{ display: 'flex' }}>
       <Navbar/>
      <CssBaseline />
      
  
      <Main open={open}>
        <DrawerHeader />
        <Typography id="texto">Acceder</Typography>
    <Stack id="botones" direction="row" spacing={2} alignItems="flex-start" justifyContent="center">
      <Button id="bh" variant="outlined" href="/landingpage/Historial"><Archive></Archive>Historial de Documentos</Button>
      <Button id="be" variant="outlined" href="/landingpage/Estudiantes"><Archive></Archive> Estudiantes</Button>
      <Button id="bs" variant="outlined" href="/landingpage/Trabajadores"><Archive></Archive> Secretarias</Button>
    </Stack>
    
   
    <TableContainer id="containerTable"  component={Paper}>
      <Table id="tabla" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     
   
      </Main>
    </Box>
    </div>
    </div>
    </div>
  );
}








