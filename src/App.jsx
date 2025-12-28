import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App(){
  return (
    <div className='bg-slate-950 min-h-screen'>
      <Navbar />
      <Hero />
      <Skills />

    </div>
  );
};

export default App;