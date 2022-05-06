import React from 'react';
import './GameCover.css'

export const GameCover = ({ image = '' }) => {
  return (
    <div className="GameCover" style={{ backgroundImage: `url(${image})`}} />
  )
}
