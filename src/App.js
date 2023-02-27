import './App.css';
import { MantineProvider, Text } from '@mantine/core';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './images/logo.png'
import { HeroImageBackground } from './containers/hero';
import Contact from './containers/contact';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <div >
          <header className='flex shadow-lg items-center justify-between px-10 md:px-32 bg-white p-5 backdrop-blur-md fixed w-screen h-[105px] z-10'>
            <Link to="/advanced-avionics-website"><img className='w-[150px]' src={logo} alt="Advanced Avionics logo"/></Link>
            <ul className='flex gap-3 md:gap-8 tracking-widest uppercase'>
              <Link to="/advanced-avionics-website" className='font-md hover:text-[#3294e2] transition-all duration-300 underline'>Home</Link>
              <Link to="/advanced-avionics-website/contact" className='font-md hover:text-[#3294e2] transition-all duration-300 underline'>Contact</Link>
            </ul>
          </header>
          <div className='pt-[105px] min-h-[100vh] flex flex-col'>
            <main>
              <Routes>
                <Route path="/advanced-avionics-website" element={<HeroImageBackground/>}/>
                <Route path="/advanced-avionics-website/contact" element={<Contact/>}/>
              </Routes>
            </main>
            <footer className='mt-auto shadow-inner flex justify-between bg-gradient-to-br from-gray-300 to-gray-400 h-fit w-screen p-5 px-7 text-gray-600 text-sm'>
              <div>
                <p>ADVANCED AVIONICS LTD</p>
                <p>Aviation Consultant</p>
              </div>
              <div>
                <p>504 Churchill Way</p>
                <p>Biggin Hill</p>
                <p>Westerham</p>
                <p>TN16 3BN</p>
              </div>
             
            </footer>
          </div>
        </div>
      </BrowserRouter>
    </MantineProvider>
    
  );
}

export default App;
