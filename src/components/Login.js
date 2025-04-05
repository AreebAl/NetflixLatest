import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Accept any credentials and redirect
    setIsAuthenticated(true);
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email or phone number"
              className="w-full p-3 bg-gray-700 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded font-bold hover:bg-red-700"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-gray-400">
          <p className="flex justify-between">
            <span className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </span>
            <Link to="/help" className="hover:underline">Need help?</Link>
          </p>
        </div>
        <div className="mt-8">
          <p className="text-gray-500">
            New to Netflix?{' '}
            <Link to="/signup" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
