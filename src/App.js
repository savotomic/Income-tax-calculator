import logo from './logo.svg';
import './App.scss';
import InputField from './components/InputField';
import IncomeTable from './components/IncomeTable/Table';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Tabs from './Tabs';

function App() {

  return (
    <div className="App">
        <Tabs />
    </div>
  );
}
    
export default App;

