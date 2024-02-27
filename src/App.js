// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Clock from './components/clock';
import Apitest from './components/apitest';

function App() {


  return (
    <div className="App">
      <Clock></Clock>
      {/* <Apitest></Apitest> */}
    </div>
  );
}

export default App;
