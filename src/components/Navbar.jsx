import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="px-6 py-6 text-white relative z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">Logo</div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-10 text-lg mr-12">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li>
            <a href="#blogs" className="nav-link">Blogs</a>
          </li>
          <li>
            <Link to="/contact" className="px-4 py-2 border border-white/40 rounded-2xl transition hover:bg-white hover:text-black">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-5 text-lg mt-4 bg-black/20 backdrop-blur-md p-6  rounded-xl lg:hidden shadow-lg border border-white/10 animate-fadeUp duration-300">
          <li>
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
          </li>
          <li>
            <a href="#blogs" className="nav-link" onClick={toggleMenu}>Blogs</a>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 border border-white/40 rounded-2xl transition hover:bg-white hover:text-black"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
