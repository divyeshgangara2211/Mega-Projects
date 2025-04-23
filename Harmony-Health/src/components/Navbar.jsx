import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-black px-4 py-3 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to={user ? "/dashboard" : "/"} className="text-xl font-bold text-white">
            Harmony Health
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {user ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
              <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
              <Link to="/success-stories" className="text-white hover:text-gray-300">Success Stories</Link>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </>
          ) : (
            <>
              <Link to="/about" className="text-white hover:text-gray-300">About Us</Link>
              <Link to="/success-stories" className="text-white hover:text-gray-300">Success Stories</Link>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </>
          )}
        </div>
        
        {/* User Profile / Login */}
        <div className="hidden md:block">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {user.username}</span>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-300 flex items-center"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-white hover:text-gray-300 flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            {user ? (
              <>
                <Link to="/dashboard" className="text-white hover:text-gray-300 py-1">Dashboard</Link>
                <Link to="/about" className="text-white hover:text-gray-300 py-1">About Us</Link>
                <Link to="/success-stories" className="text-white hover:text-gray-300 py-1">Success Stories</Link>
                <Link to="/contact" className="text-white hover:text-gray-300 py-1">Contact</Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-300 py-1 text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/about" className="text-white hover:text-gray-300 py-1">About Us</Link>
                <Link to="/success-stories" className="text-white hover:text-gray-300 py-1">Success Stories</Link>
                <Link to="/contact" className="text-white hover:text-gray-300 py-1">Contact</Link>
                <Link to="/login" className="text-white hover:text-gray-300 py-1">Login</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;