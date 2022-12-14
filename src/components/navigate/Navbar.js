import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import  ContentPasteSearchOutlinedIcon  from '@mui/icons-material/ContentPasteSearchOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ListItemText from '@mui/material/ListItemText';
import SchoolOutlinedIcon  from '@mui/icons-material/SchoolOutlined';
import InventoryOutlinedIcon  from '@mui/icons-material/InventoryOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../../styles/Navbar.css'

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  const handleListItemClick = (event,index) => {
    setSelectedIndex(index);
  };

  const handleDrawerToggle = () => {

    setMobileOpen(!mobileOpen);
  };
  const [selectedIndex, setSelectedIndex] = React.useState();

  const drawer = (
    <div>
      
      <Toolbar> 
      <Avatar  id="avatar" sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Typography id="nombre">Samantha</Typography> 
      <Typography id="numero">+998 (99) 436-46-15</Typography>
      </Toolbar>
      <Toolbar><Typography id='p'>Menu Principal</Typography></Toolbar>
      <Divider />
      <List id='lista' sx={style} component="nav" aria-label="mailbox folders">
           <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event => handleListItemClick(event, 1))}
              href="/landingpage/Inicio">
             <HomeOutlinedIcon id='home' color='primary' fontSize='small'/>
             <ListItemText id='item' primary=" Inicio" />
           </ListItemButton>
           <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event => handleListItemClick(event, 2))}
              href="/landingpage/Historial">
            <ContentPasteSearchOutlinedIcon id='historial' color='primary' fontSize='small'/>
             <ListItemText id='item' primary=" Historial" />
          </ListItemButton>
          <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event => handleListItemClick(event, 3))}
              href="/landingpage/Trabajadores">
            <GroupOutlinedIcon id= 'trabajadores' color='primary' fontSize='small'/>
          <ListItemText id='item' primary=" Trabajadores" />
          </ListItemButton>
          <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event => handleListItemClick(event, 4))}
              href="/landingpage/Estudiantes">
            <SchoolOutlinedIcon id="estudiantes" color='primary' fontSize='small'/>
             <ListItemText  id='item' primary=" Estudiantes" />
          </ListItemButton>
          <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event => handleListItemClick(event, 5))}
              href="/landingpage/Archivos">
            <InventoryOutlinedIcon id="archivos" color='primary' fontSize='small'/>
             <ListItemText  id='item' primary=" Archivos" />
          </ListItemButton>
          <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event => handleListItemClick(event, 6))}
              href="/landingpage/Configuraciones">
            <BuildCircleOutlinedIcon id="confi" color='primary' fontSize='small'/>
             <ListItemText id='item' primary=" Configuracion" />
          </ListItemButton>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          color: 'blue',
        }}
      >
        <Toolbar id='mensaje'>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color={'black'}>
            Bienvenid@, Maharram 👋!
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
     <Drawer 
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
        color='black'
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box 
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        color={'white'}
      >
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;