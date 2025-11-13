import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './components/Services';
import Features from './components/Features';
import WhyChooseUs from './components/WhyChooseUs';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="main-content">
          <Routes>
            {/* 🏠 Home Route - Includes Home page with all sections */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                  <Features />
                  <WhyChooseUs />
                </>
              }
            />

            {/* ℹ️ About Page */}
            <Route path="/about" element={<About />} />

            {/* 📞 Contact Page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
