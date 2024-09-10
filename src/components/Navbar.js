import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Card</Link></li>
        <li><Link to="/my-cards">My Cards</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;