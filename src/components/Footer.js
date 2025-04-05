import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex space-x-4 mb-6">
          <button className="hover:text-white bg-transparent border-none cursor-pointer">
            <FaFacebook className="h-6 w-6" />
          </button>
          <button className="hover:text-white bg-transparent border-none cursor-pointer">
            <FaInstagram className="h-6 w-6" />
          </button>
          <button className="hover:text-white bg-transparent border-none cursor-pointer">
            <FaTwitter className="h-6 w-6" />
          </button>
          <button className="hover:text-white bg-transparent border-none cursor-pointer">
            <FaYoutube className="h-6 w-6" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-3">
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Audio Description</button></li>
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Investor Relations</button></li>
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Legal Notices</button></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Help Center</button></li>
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Jobs</button></li>
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Cookie Preferences</button></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Gift Cards</button></li>
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Terms of Use</button></li>
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Corporate Information</button></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Media Center</button></li>
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Privacy</button></li>
              <li><button className="hover:text-white bg-transparent border-none cursor-pointer text-left">Contact Us</button></li>
            </ul>
          </div>
        </div>
        <button className="border border-gray-400 px-4 py-1 mb-6 hover:text-white">
          Service Code
        </button>
        <p className="text-sm">© 2023 Netflix Clone</p>
      </div>
    </footer>
  );
};

export default Footer;