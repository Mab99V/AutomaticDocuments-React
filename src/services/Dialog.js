import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import '../styles/Dialog.css'
import { Avatar, DialogTitle, TextField } from '@mui/material';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body=(
    <div className='body'>
      <DialogTitle>Detalle de solicitud del tramite</DialogTitle>
      <label>Nombre:</label>
      <br/>
      <TextField label="nombre" />
      <br/>
      <label className='corr'>Correo:</label>
      <br/>
      <TextField label="correo" style={{left: "250px",top: "-83px"}}/>
      <br/>
      <label className='trami'>Tramite:</label>
      <br/>
      <TextField label="tramite" style={{top: "-70px"}} />
      <br/>
      <label className='progra'>Programa Educativo:</label>
      <br/>
      <TextField label="programa educativo" style={{left: "250px",top: "-152px"}} />
      <br/>
      <label className='fech'>Fecha de solicitud:</label>
      <br/>
      <TextField label="fecha de solicitud" style={{top: "-140px"}}/>
      <br/>
      <label className='matri'>Matricula:</label>
      <br/>
      <TextField label="matricula" style={{left: "250px",top: "-222px"}}/>
      <br/>
      <div>
      <label className='descrip'>Descripción:</label>
      <br/>
      <textarea className='descrip' style={{width: "400px",height: "200px"}}/>
      </div>
      <section>
      <label className='foto'>Foto</label>
      <Avatar  id="foto" src='../images/user.jpg'></Avatar>
      <label className='matricula'>Matricula</label>
      <Avatar  id="matricula" src='../images/user.jpg'></Avatar>
      </section>
    </div>
  )

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Acción
      </Button>
      <Dialog
      className='dialog'
        open={open}
        onClose={handleClose}
      >
        {body}
      </Dialog>
    </div>
  );
}