import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import '../../styles/Navbar.css';
import  ContentPasteSearchOutlinedIcon  from '@mui/icons-material/ContentPasteSearchOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SchoolOutlinedIcon  from '@mui/icons-material/SchoolOutlined';
import InventoryOutlinedIcon  from '@mui/icons-material/InventoryOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';



function Navbar() {
  const [show] = useState(true);
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  return (
    <>
    
      <Offcanvas id='canvas' show={show}  backdrop="static">
      <Stack direction="row" spacing={2}>
     
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
     
      </Stack>
          <Offcanvas.Title id='titulo'>Menu Principal</Offcanvas.Title>
       
        <Offcanvas.Body id='body'>
        <List id='lista' sx={style} component="nav" aria-label="mailbox folders">
             <ListItem button>
             <HomeOutlinedIcon id='home' color='primary' fontSize='small'/>
             <ListItemText id='item' primary="Inicio" />
           </ListItem>
          <ListItem button >
            <ContentPasteSearchOutlinedIcon id='historial' color='primary' fontSize='small'/>
             <ListItemText id='item' primary="Historial" />
          </ListItem>
          <ListItem button>
            <GroupOutlinedIcon id= 'trabajadores' color='primary' fontSize='small'/>
          <ListItemText id='item' primary="Trabajadores" />
          </ListItem>
          <ListItem button>
            <SchoolOutlinedIcon id="estudiantes" color='primary' fontSize='small'/>
             <ListItemText  id='item' primary="Estudiantes" />
          </ListItem>
          <ListItem button>
            <InventoryOutlinedIcon id="archivos" color='primary' fontSize='small'/>
             <ListItemText  id='item' primary="Archivos" />
          </ListItem>
          <ListItem button>
            <BuildCircleOutlinedIcon id="confi" color='primary' fontSize='small'/>
             <ListItemText id='item' primary="Configuración" />
          </ListItem>
        </List>
 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;