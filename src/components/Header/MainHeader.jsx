import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Images/Sigma_Logo.png";
import { Link, useLocation } from "react-router-dom";

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Acoustic Testing", path: "/acousticTesting" },
    { name: "Endoscope Testing", path: "/endoscopeTesting" },
    { name: "Materials Testing", path: "/materialsTesting" },
    { name: "Electrical Testing", path: "/ElectricalTesting" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="bg-[#262B40] sticky top-0 z-50 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-32" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition ${
                pathname === link.path ? "text-[#B49C6A]" : "text-white hover:text-[#B49C6A]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <FaSearch className="text-white cursor-pointer hover:text-[#B49C6A] transition" />
          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#262B40] text-white px-4 py-8 space-y-5 text-[18px] font-medium flex flex-col h-screen">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`${
                pathname === link.path ? "text-[#B49C6A]" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default MainHeader;
