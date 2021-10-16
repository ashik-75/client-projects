import Cart from '../cart/Cart';
import './topbar.scss';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all';

const Topbar = () => {
  const [active, setActive] = useState(false);
  // cpnst[(active, setActive)] = useState(false);
  return (
    <div className="topbar">
      <div className={active ? 'sidebar active' : 'sidebar'}>
        <i onClick={() => setActive(false)} className="fas fa-window-close"></i>
      </div>
      <Cart />
      <div className="topbar-container">
        <div className="top">
          <div className="left">
            <Link to="/" className="link">
              <span>Join</span>
            </Link>
            <span>/</span>
            <Link to="/login" className="link">
              <span>Login</span>
            </Link>
            <span>/</span>
            <Link className="link">
              <span>Search</span>
            </Link>
          </div>
          <div className="right">
            <a href="htttp://facebook.com">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://youtube.com">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="htttps://instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="top-mobile">
          <div className="top-mobile-container">
            <div className="left" onClick={() => setActive((dt) => !dt)}>
              <i className="fas fa-bars"></i>
            </div>
            <div className="right">
              Rs.220 <i className="fas fa-cart"></i>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="logo">Agri</div>
        </div>
        <div className="bottom">
          <span className="dropdown">All</span>
          <span className="dropdown">
            Veggis & Food <i className="fas fa-chevron-down"></i>
            <span className="dropdown-content">
              <ul>
                <li>Veggis</li>
                <li>Fruits</li>
                <li>lafys</li>
                <li>CutPlays</li>
              </ul>
            </span>
          </span>
          <span className="dropdown">
            Ready Made <i className="fas fa-chevron-down"></i>
            <span className="dropdown-content">
              <ul>
                <li>Milk, Ghee</li>
                <li>Tea , Coffe & Beverrage</li>
                <li>Intant Food</li>
                <li>Fruits</li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
