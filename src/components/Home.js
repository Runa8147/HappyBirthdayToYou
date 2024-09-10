import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <h1>Welcome to the Birthday Wishing App</h1>
      <p>Create and share personalized birthday cards with your loved ones.</p>
      <Link to="/create">Get Started</Link>
    </div>
  );
}

export default Home;