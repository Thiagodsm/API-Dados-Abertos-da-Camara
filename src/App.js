import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
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