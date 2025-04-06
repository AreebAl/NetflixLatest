import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import config from '../config';

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = () => {
    if (props.setIsAuthenticated) {
      props.setIsAuthenticated(true);
    }
    // Still navigate even if setIsAuthenticated isn't provided
    navigate('/', { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${config.apiBaseUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      localStorage.setItem('token', data.token);
      handleAuth();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full p-3 bg-gray-700 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 bg-gray-700 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded font-bold hover:bg-red-700"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
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
