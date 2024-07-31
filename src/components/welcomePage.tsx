import React from 'react';
import { useLocation } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-color-primary">
      <div className="bg-color-tertiary p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Welcome, {name}!</h2>
        <p className="text-lg text-gray-600">Email: {email}</p>
      </div>
    </div>
  );
};

export default WelcomePage;
