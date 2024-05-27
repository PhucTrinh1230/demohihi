
// import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './components/layout/ContentSupport/Content';
import ContentPage2 from './components/layout/ContentSupport/ContentPage2';
import Slidebar from './components/layout/Slidebar';

import MainContent from './pages/Support/Support';
function App() {
  return (
    <React.Fragment>
    {/* <Header/>
    <Slidebar/>
    <Content/> */}
  
    <MainContent/>
    </React.Fragment>
    

  );
}

export default App;
