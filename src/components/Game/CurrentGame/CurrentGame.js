import React from 'react';
import { GameBuy } from "../../Game/GameBuy";
import { GameCover } from "../../Game/GameCover";
import { GameGenres } from "../../Game/GameGenres";


import "../../../pages/game-page/game-page.css";
export const CurrentGame = ({game}) => {
  return (
      <div className="GamePage">
        <h1 className="GamePage__title">{game.title}</h1>
        <div className="GamePage__content">
          <div className="GamePage__left">
            <iframe
              src={game.video}  
              frameBorder="0"         
              width="90%"
              height="400px"
              title="Youtube Video Player"
            ></iframe>
          </div>
          <div className="GamePage__right">
            <GameCover image={game.image} />
            <p>{game.description}</p>
            <p className="secondary-text">Популярыне метки этого продукта:</p>
            <GameGenres genres={game.genres} />
            <div className="GamePage__buy-game">
              <GameBuy game={game}/>
            </div>
          </div>
        </div>
    </div>
    
  )
}
