import './App.css';
import React from "react";
import { Button } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';

function App() {
  return (
    <PersistentDrawerLeft >
      <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>

    </PersistentDrawerLeft>
    
  );
}
export default App;

/*
function App() {
  return (
    <div className="App">
      <Container>
      <NavBar />
      <Footer />
      </Container>
      
    </div>
  );
}

export default App;

*/
/*

<Button 
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          variant="contained" 
          color="primary" 
          onClick={()=> alert('clicou')}>
          Clique
        </Button>


*/