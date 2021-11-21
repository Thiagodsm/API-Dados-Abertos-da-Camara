import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import { Container, Drawer } from '@material-ui/core';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';

function App() {
  return (
    <PersistentDrawerLeft />
    
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