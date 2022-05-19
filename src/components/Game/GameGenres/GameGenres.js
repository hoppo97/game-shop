import React from 'react';
import { GameGenre } from "../../Game/GameGenre/GameGenre";
import './GameGenres.css';


export const GameGenres = ({genres}) => {
  return (
    <>
      { genres.map((genre) => <GameGenre genre={genre} key={genre} />) }
    </>
  )
}