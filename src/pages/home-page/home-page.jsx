import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameItem } from '../../components/Game/GameItem/GameItem';
import {   fetchGetGames, fetchGetGamesToCart, isLoading, setCurrnetPage  } from '../../redux/actions/actions';
import SceletonComponent  from '../../components/SkeletonComponent/SkeletonComponent';
import './home-page.css';

// const GAMES = [
//   {
//       "image": "/game-covers/forza_5.jpeg",
//       "title": "Forza Horizon 5",
//       "genres": ["Гонки", "Симулятор", "Открытый мир"],
//       "price": 2343,
//       "video": "https://www.youtube.com/embed/FYH9n37B7Yw",
//       "id": 1,
//       "description": "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
//   },
//   {
//       "image": "/game-covers/battlefield_2042.jpg",
//       "title": "Battlefield 2042",
//       "genres": ["Экшен", "Шутер", "Война"],
//       "video": "https://www.youtube.com/embed/ASzOzrB-a9E",
//       "price": 2433,
//       "id": 2,
//       "description": "Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий."
//   },
//   {
//       "image": "/game-covers/life_is_strange_true_colors.jpeg",
//       "title": "Life is Strange True Colors",
//       "genres": ["Глубокий сюжет", "Протагонистка"],
//       "video": "https://www.youtube.com/embed/b6CkzwVAr0M",
//       "price": 3021,
//       "id": 3,
//       "description": "Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду."
//   },
//   {
//       "image": "/game-covers/gta_v.jpeg",
//       "title": "Grand Theft Auto V",
//       "genres": ["Открытый мир", "Экшен"],
//       "video": "https://www.youtube.com/embed/QkkoHAzjnUs",
//       "price": 789,
//       "id": 4,
//       "description": "Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду."
//   },
//   {
//       "image": "/game-covers/rainbow_siege.jpeg",
//       "title": "Tom Clancy\"s Rainbow Six® Siege",
//       "video": "https://www.youtube.com/embed/6wlvYh0h63k",
//       "genres": ["Тактика", "Шутер"],
//       "price": 982,
//       "id": 5,
//       "description": "Tom Clancy\"s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal."
//   },
//   {
//       "image": "/game-covers/assassins_creed_valhalla.png",
//       "title": "Assassin’s Creed Valhalla",
//       "genres": ["Паркур", "РПГ", "Открытый мир"],
//       "video": "https://www.youtube.com/embed/ssrNcwxALS4",
//       "price": 2863,
//       "id": 6,
//       "description": "Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed."
//   },
// ]

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
    dispatch(fetchGetGames('', currentPage, pageSize));
    dispatch(fetchGetGamesToCart());
  }, []);

  const dispatchCurrentPage = (page) => {
    dispatch(fetchGetGames('', page, pageSize));
  }

  console.log('компонент');

  return (
    <>
      <div className="home-page">
        {!loading ? GAMES.map(game => (
          <GameItem game={game}  key={game.id}/>
          )) :  [...Array(4)].map(index => (<SceletonComponent key={index}/>))}
      </div>
      <div style={{ marginTop: '20px',}}>
        {pages.map(page => {
          return <span onClick={() => dispatchCurrentPage(page)} className={`${currentPage === page && "home-page__span-select"}`}>{page}</span>
        })}
      </div>
  </>
  )
}
