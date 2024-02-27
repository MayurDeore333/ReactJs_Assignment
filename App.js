import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Footer from './Footer';
import './Navbar.scss'; 

const App = () => {
    return (
        <div className="App">
            <Navbar /> 
            <MainSection />
            <Footer />
        </div>
    );
};

export default App;
