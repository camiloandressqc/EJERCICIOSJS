
import React from "react";

import { Nav } from "./assets/components/nav/nav";
import { Home } from "./assets/components/home/home";
import { About } from './assets/components/about/about';
import { Users } from './assets/components/users/users';
import { UsersDetails } from './assets/components/UsersDetails/UsersDetails';
import { NotFound } from './assets/components/notfound/notFound';

import { Routes, Route} from 'react-router-dom';


export const App = ()=> {

  return (
    <>
      <Nav/>

      {/* Estipulamos las rutas */}

        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/About" element = {<About/>}/>
          <Route path = "/Users" element = {<Users/>}/>
          <Route path = "/Users/:id" element = {<UsersDetails/>}/>
          <Route path = "*" element = {<NotFound/>}/>
       </Routes>


    </>
  )

}
