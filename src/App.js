import React from 'react';
import Header from './component/Header';
import PokeTable from './component/PokeTable';
import Search from './component/Search';

function App() {
  return (
    // Type your website layout here...
    <div id="app">
      <Header />
      <PokeTable />
      <hr />
      <Search />
    </div>
  );
}

export default App;
