import React from 'react';
import './App.css';

import { Top } from './components/top';
import { Main } from './components/main';
import { Second } from './components/second';
import { Third } from './components/third';
import { Last } from './components/last';
import { Contact } from './components/contact';

function App() {
  return (
    <div className="App">
      <Top />
      <Main />
      <Second />
      <Third />
      <Last />
      <Contact />
    </div>
  );
}

export default App;
