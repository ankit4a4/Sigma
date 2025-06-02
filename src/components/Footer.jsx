import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "../assets/Images/Sigma_Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1c1e2f] text-white pt-16 pb-6 px-4">
      <hr className="text-gray-600 my-4" />
      <div className="max-w-6xl mx-auto sm:grid md:flex items-center justify-between gap-12 md:grid-cols-4 sm:grid-cols-2">
        {/* Brand Info */}
        <div className="md:w-[30%]">
          <img className="w-28 h-10 object-cover" src={logo} alt="Logo" />
          <p className="text-gray-400 text-[15px] mt-2">
            We provide compliant medical device testing and consulting services
            for startups and manufacturers around the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-[30%]">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-[15px]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/acousticTesting">Acoustic Testing</Link></li>
            <li><Link to="/endoscopeTesting">Endoscope Testing</Link></li>
            <li><Link to="/materialsTesting">Materials Testing</Link></li>
            <li><Link to="/ElectricalTesting">Electrical Testing</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:w-[30%]">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-[15px] mb-2">
            Sigma Labs HQ <br />
            456 MedTech Park, Austin, TX 78701, USA
          </p>
          <p className="text-gray-300 text-[15px]">Phone: +1 (888) 456-7890</p>
          <p className="text-gray-300 text-[15px]">Email: info@sigmalabs.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-[#c5b690]" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-[#c5b690]" /></a>
            <a href="#"><Linkedin className="w-5 h-5 hover:text-[#c5b690]" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-[14px] text-gray-500">
        &copy; {new Date().getFullYear()} Sigma Scientific Labs. All rights reserved. |{" "}
        <Link to="/privacy" className="hover:text-[#c5b690]">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
