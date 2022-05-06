import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameBuy } from "../../components/GameBuy";
import { GameCover } from "../../components/GameCover";
import { GameGenre } from "../../components/GameGenre";
import { getCurrentGame, setCurrentGame } from "../../redux/actions/actions";
import "./game-page.css";

export const GamePage = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => {
    const { currentGameReducer } = state;
    return currentGameReducer.currentGame;
  });

  
  React.useEffect(() => {
    return () => {
      console.log('Компонент удалился');
    }
  }, [])


  if (!game) return null;

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
          { game.genres.map((genre) => <GameGenre genre={genre} key={genre} />) }
          <div className="GamePage__buy-game">
            <GameBuy game={game}/>
          </div>
        </div>
      </div>
    </div>
  );
};
