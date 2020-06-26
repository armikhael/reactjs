import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout'
import BadgeNew from '../pages/BadgeNew/BadgeNew'
import Badge from '../pages/Badge/Badge'
import Badges from '../pages/Badges/Badges'
import BadgeEdit from '../pages/BadgeEdit/BadgeEdit'
import NotFound from '../pages/NotFound/NotFound'
import Home from '../pages/Home/Home'
import RickAndMorty from '../pages/RickAndMorty/RickAndMorty'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badge" component={Badge} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badge/new" component={BadgeNew} />
          <Route exact path="/badge/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/rick-and-morty" component={RickAndMorty} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App; 