import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { Nav } from './component/Nav'

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Manager from "./pages/Manger"
import Hr from "./pages/Hr"
import Details from './pages/EmpoyeeDetail'

function App() {
  
  return (
    <>
     <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}>
           <Route path='manager' element={<Manager/>}/>
           <Route path='hr' element={<Hr/>}/>
           </Route>
            <Route path='*' element={<Notfound/>}/>
             <Route path='*' element={<Notfound/>}/>
             <Route path='/contact/:id' element={<Details/>} />
      </Routes>
     </div>
    </>
  )
}

export default App
