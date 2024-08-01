import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Logo' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li
          className={menu === 'shop' ? 'active' : ''}
          onClick={() => setMenu('shop')}
        >
        <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>
          <hr />
        </li>
        <li
          className={menu === 'mens' ? 'active' : ''}
          onClick={() => setMenu('mens')}
        >
        <Link style={{ textDecoration: 'none'}} to='mens'>Men</Link>
          <hr />
        </li>
        <li
          className={menu === 'womens' ? 'active' : ''}
          onClick={() => setMenu('womens')}
        >
        <Link style={{ textDecoration: 'none'}} to='/womens'>Womens</Link>
          <hr />
        </li>
        <li
          className={menu === 'kids' ? 'active' : ''}
          onClick={() => setMenu('kids')}
        >
          <Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>
          <hr />
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='Cart Icon' /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
