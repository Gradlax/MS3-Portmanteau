import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { NavBar } from './components/';
import './App.scss'

const App = () => (
  <div className="app">
    {/* Check capilization here ^ (a or A) */}
    <NavBar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;