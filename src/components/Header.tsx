import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>FarmCold</h1>
          <p>Cold Storage Education</p>
        </div>
        <nav className={menuActive ? 'active' : ''}>
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/techniques">Techniques</Link></li>
            <li><Link to="/maintenance">Maintenance</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;