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
          <header className='flex items-center justify-between px-10 md:px-32 bg-white p-5 backdrop-blur-md fixed w-screen h-[105px] z-10'>
            <Link to="/"><img className='w-[150px]' src={logo} alt="Advanced Avionics logo"/></Link>
            <ul className='flex gap-5'>
              <Link to="/" className='font-md hover:text-[#3294e2] transition-all duration-300 underline'>Home</Link>
              <Link to="/contact" className='font-md hover:text-[#3294e2] transition-all duration-300 underline'>Contact</Link>
            </ul>
          </header>
          <div className='pt-[105px]'>
            <main>
              <Routes>
                <Route path="/" element={<HeroImageBackground/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
            </main>
            <footer>

            </footer>
          </div>
        </div>
      </BrowserRouter>
    </MantineProvider>
    
  );
}

export default App;
