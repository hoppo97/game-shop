import React from 'react';
import {CartBlock} from '../Cart/CartBlock';
import {Link, Route, Routes} from 'react-router-dom';
import './Header.css';
import { Input } from '../UI/input';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__title">
        Game Store
      </Link>

      <Routes>
        <Route path="/" element={ <Input />} />
      </Routes>
      
      <CartBlock />
    </div>
  )
}
