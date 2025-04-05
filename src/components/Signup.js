import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 rounded"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 bg-gray-700 rounded"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 bg-gray-700 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded font-bold hover:bg-red-700"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-8">
          <p className="text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-white hover:underline">
              Sign in now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
