import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameItem } from '../../components/Game/GameItem/GameItem';
import { fetchGetGames, fetchGetGamesToCart } from '../../redux/actions/actions';
import SceletonComponent  from '../../components/SkeletonComponent/SkeletonComponent';
import './home-page.css';
import { Pagination } from '../../components/Pagination';


export const HomePage = () => {
  const GAMES = useSelector((state) => state?.gamesReducer?.games);
  const loading = useSelector((state) => state?.gamesReducer?.loading);
  const totalUsersCount = useSelector((state) => state?.gamesReducer?.totalUsersCount);
  const currentPage = useSelector((state) => state?.gamesReducer?.currentPage);
  const pageSize = useSelector((state) => state?.gamesReducer?.pageSize);
  const dispatch = useDispatch();

 
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];

  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  console.log(pagesCount);

  React.useEffect(() => {
    dispatch(fetchGetGames());
    
    dispatch(fetchGetGamesToCart());
  }, []);

  console.log('компонент');

  const dispatchCurrentPage = React.useCallback((page) => {
    dispatch(fetchGetGames(page));
  }, []);

  return (
    <>
      <div className="Home-page">
        {!loading ? GAMES.map(game => (
          <GameItem game={game}  key={game.id}/>
          )) :  [...Array(4)].map(index => (<SceletonComponent key={index}/>))}
      </div>
      <div className="Home-page__pagination">
        {GAMES.length > 0 ? pages.map(page => (
          <Pagination dispatchCurrentPage={dispatchCurrentPage} currentPage={currentPage} page={page} key={page}/>
        )
        ) : <h1>По вашему запросу ничего не нашлось!</h1>} 
      </div>
  </>
  )
}
