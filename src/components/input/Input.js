import React from 'react'
import { useDispatch } from 'react-redux';
import {  searchGames } from '../../redux/actions/actions'
import './Input.css';
import * as _ from 'lodash';

export const Input = () => {
  const dispatch = useDispatch();

  const delayedQuery = React.useCallback(
    _.debounce((q) => {
      console.log();
      dispatch(searchGames(q));
    }, 500),
    []
  );
  const SearchValue = (e) => {
    delayedQuery(e.target.value);
  };

  return (
    <div className="Input__block">
      <input type="text" onChange={SearchValue} className="Input" placeholder="Поиск игры...."/>
    </div>
  )
}


