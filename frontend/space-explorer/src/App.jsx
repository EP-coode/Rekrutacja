import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage'
import FavPage from './pages/FavPAge/FavPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <main>
        <Switch>
          <Route path='/fav' component={MainPage} exact/>
          <Route path='/'    component={FavPage}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
