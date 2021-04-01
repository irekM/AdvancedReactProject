import React from 'react';
import {HashRouter as Router} from 'react-router-dom';


import AsideMenu from './components/AsideMenu/AsideMenu';

import Header from './components/Header';
import StoreProvider from './store/StoreProvider';

import './App.scss';
import Content from './components/Content/Content';


const App = () => (
    <StoreProvider>
    <Header/>
    <Router>
    <div className="conten-wrapper">
    <AsideMenu/>
    <Content />
  
    </div>
    </Router>
    </StoreProvider>
);

export default App;