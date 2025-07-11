import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';



const Layout = () => {
  return (
     <main
      className="fixed inset-0 bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: "url('/3409297.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />

      {/* Navbar always at top */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 flex-1 overflow-y-auto scrollbar-hide">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
