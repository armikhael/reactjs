import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout/Layout'
import BadgeNew from '../pages/BadgeNew/BadgeNew';
import Badge from '../pages/Badge/Badge'
import NotFound from '../pages/NotFound/NotFound'
import Home from '../pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badge" component={Badge} />
          <Route exact path="/badge/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App; 