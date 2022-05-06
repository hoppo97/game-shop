import React from 'react';
import {CartBlock} from '../CartBlock';
import {Link} from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        Game Store
      </Link>

      <CartBlock />
    </div>
  )
}
