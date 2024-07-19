import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <h1 className="text-5xl font-bold mb-8">Xternship</h1>
      <Link to="/signup">
        <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
