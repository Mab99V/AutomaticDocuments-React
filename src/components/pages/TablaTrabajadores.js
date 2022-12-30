import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';
import '../../styles/Trabajadores.css';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
//Axios
import axios from 'axios';
import { useEffect,useState } from 'react';
import {baseURL} from '../../services/api'


//API

let url = baseURL + "/administradores";


//Paginacion de la Tabla 
function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
          <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
           
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
       
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </Box>
      );
    }


    TablePaginationActions.propTypes = {
        count: PropTypes.number.isRequired,
        onPageChange: PropTypes.func.isRequired,
        page: PropTypes.number.isRequired,
        rowsPerPage: PropTypes.number.isRequired,
      };


//Propiedades de la tabla 

  
  export default function TablaTrabajadores(){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const[usuarios, setUsuario] = useState([])
    const[ search, setSearch] = useState("")

    const showData = async () => {
        axios.get(url).then(async (response) =>{
         const re= response.data
         console.log(re);
         setUsuario(re)
        })
     }
     const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e)
    }
     
    // const resultados = !search ? usuarios : usuarios.filter((dato) => dato.estado.toLowerCase().includes(search.toLocaleLowerCase()))
 
     useEffect( () =>{
         showData()
     }, [] )

// Avoid a layout jump when reaching the last page with empty rows.
const emptyRows =
page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usuarios.length) : 0;

const handleChangePage = (event,newPage) => {
setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
setRowsPerPage(parseInt(event.target.value, 10));
setPage(0);
};
 


return (
    <div className="container" >
    <div className="row">
       <div className="col md-4">
       <Paper id="conte"
           component="form"
           sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <InputBase 
           value={search} onChange={searcher} 
           sx={{ ml: 1, flex: 1 }}
           placeholder="Buscar por nombre"/>
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
        </IconButton>
        </Paper>
<TableContainer id="containerTable" component={Paper}>
<Table id="tabla"  sx={{ minWidth: 500 }} >
<TableHead >
    <TableRow>
      <TableCell>#Facultad</TableCell>
      <TableCell align="right">Usuario de Trabajador</TableCell>
      <TableCell align="right">Correo</TableCell>
      <TableCell align="center">Contraseña</TableCell>
      <TableCell align="right">Nombre</TableCell>
      <TableCell align="right">Apellido Paterno</TableCell>
      <TableCell align="right">Apellido Materno</TableCell>
    
    </TableRow>
  </TableHead>



  <TableBody>
   
    {(rowsPerPage > 0
      ? usuarios.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : usuarios
    ).map((usuarios) => (
      <TableRow key={usuarios.id}>
        <TableCell component="th" scope="row">
          {usuarios.id_facultades}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {usuarios.usuario}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {usuarios.correo}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {usuarios.contrasena}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {usuarios.nombre}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {usuarios.apellido_paterno}
        </TableCell>
        <TableCell style={{ width: 160 }} align="right">
          {usuarios.apellido_materno}
        </TableCell>
      </TableRow>
    ))}

    {emptyRows > 0 && (
      <TableRow style={{ height: 53 * emptyRows }}>
        <TableCell colSpan={6} />
      </TableRow>
    )}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        colSpan={3}
        count={usuarios.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </TableRow>
  </TableFooter>
</Table>
</TableContainer>
</div>
    </div>
    </div>
  );


  }