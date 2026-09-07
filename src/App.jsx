import Navbar from './components/Navbar';
import Footer from './components/Footer';

// to fix to stay on top of page in routing
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout shared by all routes; vite-react-ssg supplies the router, so this only renders the shell
function App() {
  return (
    <div className='bg-slate-950 min-h-screen flex flex-col'>
      <ScrollToTop />
      <Navbar />

      {/* Main Content Area */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Footer: Stays at the bottom of every page */}
      <Footer />
    </div>
  );
};

export default App;