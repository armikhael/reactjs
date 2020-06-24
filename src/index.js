import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew/BadgeNew';
import Badge from './pages/Badge/Badge'

import 'bootstrap/dist/css/bootstrap.css'
import './main.css'

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
