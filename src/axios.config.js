
function initAxiosConfig () {
  const PROJECT_API_URL = 'https://6263fc7598095dcbf929ae50.mockapi.io';
  const GAMES_API = `${PROJECT_API_URL}/games`;
  const CART_API = `${PROJECT_API_URL}/cart`;
  const CURRENT_GAME_API =  `${PROJECT_API_URL}/currentGame`;

  const GAMES_API_WITH_PARAMS = (currentPage, pageSize) => `${GAMES_API}?page=${currentPage}&limit=${pageSize}`;


  return {
    PROJECT_API_URL,
    GAMES_API,
    CURRENT_GAME_API,
    CART_API,
    GAMES_API_WITH_PARAMS,
  }

}

export const AXIOS_CONFIG = initAxiosConfig();