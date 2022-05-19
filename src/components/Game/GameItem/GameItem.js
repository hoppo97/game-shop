import React from 'react';
import ContentLoader from "react-content-loader";

import {useNavigate} from 'react-router-dom';

import {GameCover} from '../GameCover';
import {GameGenres} from '../GameGenres';
import {GameBuy} from '../GameBuy';

import './GameItem.css';

export const GameItem = ({ game }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app/${game.id}`);
  };
  
  return ( 
     <div className="GameItem" onClick={ handleClick }>
      <GameCover image={game.image}/>
      <div className="GameItem__details">
        <span className="GameItem__title">{game.title}</span>
        <div className="GameItem__genre">
          <GameGenres genres={game.genres} />
        </div>
        <div className="GameItem__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div> 
  )
}
