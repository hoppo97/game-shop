import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Header } from './components/Header';
import { HomePage } from './pages/home-page';
import { GamePage } from './pages/game-page';
import { OrderPage } from './pages/order-page';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={ <HomePage />} />
            <Route path="/app/:id" element={ <GamePage />} />
            <Route path="order" element={ <OrderPage />} />
          </Routes>
        </div>
      </Router>
  
  );
}

export default App;
