import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentGame } from "../../components/Game/CurrentGame"
import { getCurrentGame, setCurrentGame } from "../../redux/actions/actions";

import { useParams } from "react-router-dom";

export const GamePage = () => { 
  let { id } = useParams();
  const dispatch = useDispatch();
  const game = useSelector((state) => state?.currentGameReducer?.currentGame);
    
  React.useEffect(() => {
    if (game?.id !== id) {
      dispatch(getCurrentGame(Number(id)));
    }
    console.log('Компонент монтирован');
  }, []);

  React.useEffect(() => {
    return () => {
      // dispatch(setCurrentGame(null));
      console.log('Компонент удалился');
    }
  }, []);


  if (!game) return null;

  return (
    <>
      <CurrentGame game={game}/>
    </>
  );
};
