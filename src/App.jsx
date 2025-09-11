import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import { ArrowDownLeftIcon ,ChevronDownIcon, } from '@heroicons/react/24/outline';

export default function App() {
  function handleHomeClick() {
    alert("Welcome to Home Page");
  }
 function handleAboutClick() {
    alert("Welcome to about");
  }
   function handlecontactClick() {
    alert("Welcome to contact");
  }
  return (
    <BrowserRouter>
      <nav className="flex items-center justify-between bg-[#010101] text-white mx-40 py-5 px-4.5 border-1 border-[#141414] border-solid
 rounded-full">
        <div className="">
          <img src="/bitzsol.JPG" alt="Bitzsol Logo" className="h-7 w-20" />

        </div>
        <div className='flex justify-center gap-3.5 text-white text-[15px] decoration-solid'>
          <Link to="/" onClick={handleHomeClick} className="">
            Why Us
          </Link>
          <Link to="/about" onClick={handleAboutClick} className="">Mission</Link>
          <Link to="/contact" onClick={handlecontactClick} >Work</Link>
                    <Link to="/contact" onClick={handlecontactClick} >Services</Link>

     <Link to="/contact" onClick={handlecontactClick} className='flex items-center gap-1' >
     <span>Pages</span>
     <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
     </Link>

        </div>

      <Link to="/contact"
      onClick={handlecontactClick}
      className="flex items-center gap-2">
  <span>Let's Talks</span>
  <ArrowDownLeftIcon  className="h-4 w-4 rotate-180 " aria-hidden="true" />
</Link>

        
      </nav>
       

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>




  );
}