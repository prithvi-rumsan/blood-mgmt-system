import React from 'react';
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from './HomePage/HomePage';
import Admin from './Admin/Admin';

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
