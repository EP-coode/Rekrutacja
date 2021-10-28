import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FavProvider from './context/FavContext';
import Navigation from './components/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage'
import FavPage from './pages/FavPAge/FavPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Switch>
          <FavProvider>
            <Route path='/fav' component={FavPage} exact />
            <Route path='/' component={MainPage} />
          </FavProvider>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
