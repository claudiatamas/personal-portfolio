import React from 'react';
import Navbar from '../components/Navbar'; 
import Header from '../components/Header'; 
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar /> 
        <Header />
        <Work />
        <About />
        <Contact/>
        <Footer/>
      </div>
    );
};

export default Home;

