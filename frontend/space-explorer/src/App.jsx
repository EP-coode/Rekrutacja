import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Particles from 'react-particles-js'
import React, { useMemo } from 'react';

import FavProvider from './context/FavContext';
import Navigation from './components/Navigation/Navigation';
import MainPage from './pages/MainPage/MainPage'
import './App.css';
import FavsPage from './pages/FavsPage/FavsPage';

// inspiration: https://vincentgarreau.com/particles.js/
const PRATICLES_PARAMS = {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 790
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  }
}

function App() {

  return (
    <React.Fragment>
      <div id="particles-container">
        <Particles
          params={PRATICLES_PARAMS}
        ></Particles>
      </div>
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
    </React.Fragment>
  );
}

export default App;
