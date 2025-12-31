import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Projects';
import Footer from './components/Footer';
import AboutContact from './components/AboutContact';

// to fix to stay on top of page in routing
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// For routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className='bg-slate-950 min-h-screen flex flex-col'>
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Home Page: Shows Hero and Skills */}
            <Route path='/' element={<> <Hero /> <Skills /> </>} />

            {/* Projects Page */}
            <Route path="/projects" element={<Project />} />

            {/* About & Contact Page */}
            <Route path="/contact" element={<AboutContact />} />
          </Routes>
        </main>

        {/* Footer: Stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;