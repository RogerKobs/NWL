import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MapaOrfanatos from './pages/MapaOrfanatos';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/mapa' component={MapaOrfanatos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;