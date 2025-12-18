import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rules from './pages/Rules';
import DisclaimerPopup from './components/DisclaimerPopup';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            {/* Add more routes if new pages appear */}
          </Routes>
        </main>
        <Footer />
      </div>
      
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <DisclaimerPopup />  {/* Add this line */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </main>
      <Footer />
    </div>

    </Router>
    
  );
};

export default App;
