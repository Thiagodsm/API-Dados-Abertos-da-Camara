import React from 'react'
import { Routes, Route } from 'react-router-dom';

/*-- pages --*/
import Home from './home';
import About from './about';
import Contatct from './contact';
import Deputados from './deputados';
import Favoritos from './favoritos';
/*-- pages --*/

function Pages() {
    return (
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path = "/pages/about" element={<About/>} />
          <Route path = "/pages/contact" element={<Contatct/>} />
          <Route path = "/pages/deputados" element={<Deputados/>} />
          <Route path = "/pages/favoritos" element={<Favoritos/>} />
        </Routes>
    )
}

export default Pages