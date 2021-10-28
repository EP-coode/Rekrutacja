import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FavProvider from './context/FavContext';
import Navigation from './components/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage'
import './App.css';
import FavsPage from './pages/FavsPage/FavsPage';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <FavProvider>
          <Switch>
            <Route path='/fav' component={FavsPage} exact />
            <Route path='/' component={MainPage} />
          </Switch>
        </FavProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
