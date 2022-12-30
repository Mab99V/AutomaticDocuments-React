import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../navigate/Navbar'
import '../../styles/Trabajadores.css';
import Typography from '@mui/material/Typography';
//import Paper from '@mui/material/Paper';
//import InputBase from '@mui/material/InputBase';
//import IconButton from '@mui/material/IconButton';
//import SearchIcon from '@mui/icons-material/Search';
import TablaTrabajadores from './TablaTrabajadores';



const drawerWidth = 240;
  
//Propiedades del Navbar 

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
        <Typography id="texto">Trabajadores</Typography>
        <TablaTrabajadores/>
      </Main>
    </Box>
    </div>
    </div>
    </div>
  );
}

