import React from 'react';
import Topbar from './components/topbar/Topbar';
import Homepage from './screen/homepage/Homepage';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <Router>
      <Topbar />
      <main>
        <Homepage />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
