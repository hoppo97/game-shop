import React from 'react';
import {CartBlock} from '../CartBlock';
import {Link} from 'react-router-dom';
import './Header.css';
import { Input } from '../input';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        Game Store
      
      </Link>
      <Input />
      <CartBlock />
    </div>
  )
}
