import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>The GPH Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">New Blog</a>
        </div>
      </nav>
    </div> 
  );
}

export default Navbar;
