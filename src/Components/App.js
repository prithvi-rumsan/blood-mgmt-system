import React from 'react';
import { Route, Routes, useRoutes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './HomePage';
import Admin from './Admin';

function AppRoute () {
   let routes = useRoutes([
     {path : '/', element: <Home/>},
     {path : '/admin', element : <Admin/>}
   ]);
  
    return routes;
}

function App() {
  return (
    <Router>
      <AppRoute/>
    </Router>
  );
}

export default App;
