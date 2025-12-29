import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Projects';


// For routing 
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';

function App(){
  return (

    <Router>

        <div className='bg-slate-950 min-h-screen'>
          <Navbar />
          <Routes>

            <Route path ='/' element={<> <Hero/> <Skills/> </>} />

            <Route path="/projects" element={<Project/>} />
            
          </Routes>
          

        </div>
    </Router>
   
  );
};

export default App;