import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-color-primary">
      <div className="bg-color-tertiary p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          </div>
          <button className="w-full p-3 bg-color-accent text-white rounded hover:bg-color-accent-dark" style={{ backgroundColor: '#3B82F6' }}>Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-600">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
      </div>
    </div>
  );
};

export default SignUp;
