import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

//icon
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';
//styles
import '../../styles/Navbar.css';


const drawerWidth = 240;

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



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (event,index) => {
    setSelectedIndex(index);
  };

  const [selectedIndex, setSelectedIndex] = React.useState();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Main open={open}>
        
      <AppBar id="tol" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="black" variant="h6" noWrap component="div">
            Bienvenido
          </Typography>
        </Toolbar>
        < LogoutIcon id="salir" color='primary' />
      </AppBar>
      </Main>
        
     
      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'black',
            color:'white'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton  onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Toolbar> 
      <Avatar  id="avatar" ></Avatar>
      </Toolbar>
      <Toolbar><Typography id='p'>Menu Principal</Typography></Toolbar>
      <Divider />

        <List>
           <ListItemButton selected={selectedIndex === 1}
              onClick={(event => handleListItemClick(event, 1))}
              href="/landingpage/Inicio">
             <AutoAwesomeMosaicIcon  id= 'home' color='primary' fontSize='small'/>
             <ListItemText primary="Inicio" />
           </ListItemButton>

           <ListItemButton selected={selectedIndex === 2}
              onClick={(event => handleListItemClick(event, 2))}
              href="/landingpage/Historial">
            <ContentPasteSearchIcon id= 'icon' color='primary' fontSize='small'/>
             <ListItemText  primary=" Historial" />
          </ListItemButton>

          <ListItemButton selected={selectedIndex === 3}
              onClick={(event => handleListItemClick(event, 3))}
              href="/landingpage/Trabajadores">
            <GroupsIcon id= 'icon'  color='primary' fontSize='small'/>
          <ListItemText  primary=" Trabajadores" />
          </ListItemButton>

          <ListItemButton selected={selectedIndex === 4}
              onClick={(event => handleListItemClick(event, 4))}
              href="/landingpage/Estudiantes">
            <GroupIcon id= 'icon' color='primary' fontSize='small'/>
             <ListItemText   primary=" Estudiantes" />
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 5}
              onClick={(event => handleListItemClick(event, 5))}
              href="/landingpage/Archivos">
            <InventoryIcon id= 'icon' color='primary' fontSize='small'/>
             <ListItemText   primary=" Archivos" />
          </ListItemButton>
          <ListItemButton selected={selectedIndex === 6}
              onClick={(event => handleListItemClick(event, 6))}
              href="/landingpage/Configuraciones">
            <TuneIcon  id= 'icon' color='primary' fontSize='small'/>
             <ListItemText    primary=" Configuracion" />
          </ListItemButton>
        </List>

      </Drawer>

    
    </Box>
  );
}