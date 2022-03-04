import './index.css'
import React from 'react';

import About from './Components/About/About';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Experience from './Components/Experience/Experience';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimunius from './Components/Testimunius/Testimunius';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">

      <Header />
      <Navbar />
      <About />
      
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimunius/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
