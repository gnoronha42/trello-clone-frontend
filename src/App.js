import React, { useState } from 'react';
import { Modal, Box, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const [boardName, setBoardName] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBoardNameChange = (event) => {
    setBoardName(event.target.value);
  };

  const handleSave = () => {
    console.log(`Nome do quadro: ${boardName}`);
    setOpen(false);
  };

  return (
    <div className="App">

       <div className="btnContainer" >
       <Button 
        variant="contained" 
        startIcon={<AddIcon />} 
        onClick={handleOpen}
      >
   
      </Button>

       </div>
      

      <Modal open={open} onClose={handleClose}>
        <Box 
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>Nome do Quadro</h2>
          <TextField 
            label="Nome" 
            variant="outlined" 
            fullWidth 
            value={boardName}
            onChange={handleBoardNameChange}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSave} 
            sx={{ mt: 2 }}
          >
            Salvar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default App;
