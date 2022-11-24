import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
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
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event,index) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <Menu id='canvas' backdrop="static">
      
      <Stack direction="row" spacing={2}>
     
      <Avatar  id="avatar" sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
     
      </Stack>
        <List id='lista' sx={style} component="nav" aria-label="mailbox folders">
           <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event => handleListItemClick(event, 1))}
              href="/landingpage/Inicio">
             <HomeOutlinedIcon id='home' color='primary' fontSize='small'/>
             <ListItemText id='item' primary="Inicio" />
           </ListItemButton>
           <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event => handleListItemClick(event, 2))}>
            <ContentPasteSearchOutlinedIcon id='historial' color='primary' fontSize='small'/>
             <ListItemText id='item' primary="Historial" />
          </ListItemButton>
          <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event => handleListItemClick(event, 3))}>
            <GroupOutlinedIcon id= 'trabajadores' color='primary' fontSize='small'/>
          <ListItemText id='item' primary="Trabajadores" />
          </ListItemButton>
          <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event => handleListItemClick(event, 4))}>
            <SchoolOutlinedIcon id="estudiantes" color='primary' fontSize='small'/>
             <ListItemText  id='item' primary="Estudiantes" />
          </ListItemButton>
          <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event => handleListItemClick(event, 5))}>
            <InventoryOutlinedIcon id="archivos" color='primary' fontSize='small'/>
             <ListItemText  id='item' primary="Archivos" />
          </ListItemButton>
          <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event => handleListItemClick(event, 6))}>
            <BuildCircleOutlinedIcon id="confi" color='primary' fontSize='small'/>
             <ListItemText id='item' primary="Configuración" />
          </ListItemButton>
        </List>
    </Menu>
    </>
  );
}

export default Navbar;