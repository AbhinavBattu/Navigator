import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css'; // Import your CSS file for custom styles

export default function Navbar() {
  const { user, loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          AVIATOR
        </div>
        <ul className="navbar-links">
          <li><a href="#" className="navbar-link">Home</a></li>
          <li><a href="#" className="navbar-link">About</a></li>
          {/* <li><a href="#" className="navbar-link">Services</a></li>
          <li><a href="#" className="navbar-link">Contact</a></li> */}
          {isAuthenticated ? (
            <li className="user-info">
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="navbar-link" // Using the same class as the navigation links
              >
                Log Out
              </button>
              <img src={user.picture} alt={user.name} className="user-picture" />
              <span className="user-name">{user.name}</span>
            </li>
          ) : (
            <li>
              <button
                onClick={() => loginWithRedirect()}
                className="navbar-link" // Using the same class as the navigation links
              >
                Log In
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
