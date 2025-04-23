import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Store the attempted URL for redirecting after login
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-white mb-4">Please Login First</h2>
          <p className="text-gray-300 mb-6">You need to be logged in to access this page.</p>
          <Navigate 
            to="/login" 
            state={{ from: location.pathname }}
            replace 
          />
        </div>
      </div>
    );
  }

  return children;
};

export default RequireAuth;