import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="px-6 py-8 text-white relative z-10">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">Logo</div>

        {/* Nav links */}
        <ul className="flex gap-10 text-lg mr-12">
          <li>
            <Link to="/" className="text-white relative group pb-1">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full origin-right"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white relative group pb-1">
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full origin-right"></span>
            </Link>
          </li>
          <li>
            <a href="#contact" className="text-white relative group pb-1">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full origin-right"></span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-white relative group pb-1">
              Blogs
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full origin-right"></span>
            </a>
          </li>
          <li>
          <Link to="/contact"
            className="text-white px-4 py-2 border border-white/40 rounded-2xl transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
          >
            Contact
          </Link>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;