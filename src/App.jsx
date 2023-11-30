import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {LandingPage, MenuPage, DashboardPage} from './pages';

export default function App() {

  return (
    <Routes>
      <Route path="/menu" exact={true} element={<MenuPage />} />
      <Route path="/dashboard/:id" exact={true} element={<DashboardPage />} />
      <Route path="/" exact={true} element={<LandingPage />}/>      
    </Routes>
  )
}
//<Route path="/" exact={true} element={<LandingPage />}/>