import { Component } from 'react';
//import './App.css';
import React from "react";
//import Stack from '@mui/material/Stack';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';

/*-- components --*/
import Footer from './components/Footer';
/*-- components --*/

/*-- pages --*/
import Pages from './pages/index';
/*-- pages --*/

/*-- APIUtils --*/
import api from './api/APIUtils';
/*-- APIUtils --*/

class App extends Component{

  state ={
    data: [],
  }

  async componentDidMount(){
    const response = await api.getDeputados()

    //console.log(response.data);
    this.setState({data: response.data});
  }

  render(){
    return (    
      <div className='App'>
        <PersistentDrawerLeft >
          <Pages/>
        </PersistentDrawerLeft>
        <Footer/>
      </div>
    )
  }
}

// using function 
/*function App() {
  return (    
    <div className='App'>
        <NavBar />
        <Pages />
        <Footer />
    </div>
  );
}*/

export default App;



//function App() {
  //return (
    //  <PersistentDrawerLeft >
        //{/*<Stack direction="row" spacing={2}> </Stack>*/}
      //  <Pages/>
      //</PersistentDrawerLeft>
    
    
  //);
//}
//export default App;

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