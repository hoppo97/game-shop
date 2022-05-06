import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {GameCover} from '../GameCover';
import {GameGenre} from '../GameGenre';
import {GameBuy} from '../GameBuy';

import { setCurrentGame } from '../../redux/actions/actions';

import './GameItem.css';

export const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    console.log(game);
    navigate(`/app/${game.title}`)
  };
  
  return (
    <div className="GameItem" onClick={ handleClick }>
      <GameCover image={game.image}/>
      <div className="GameItem__details">
        <span className="GameItem__title">{game.title}</span>
        <div className="GameItem__genre">
          {game.genres.map(genre => (
            <GameGenre  genre={genre} key={genre}/>
          ))}
        </div>
        <div className="GameItem__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  )
}
