import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './component/Header';
import PokeTable from './component/PokeTable';
import Search from './component/Search';
import SingePage from './component/SinglePage';
import Default from './component/Default';

function App() {
  return (
    // Type your website layout here...
    <div id="app">
      <Header />
      <Switch>
        <Route exact path='/' component={PokeTable} />
        <Route path='/details' component={SingePage} />
        <Route component={Default} />
      </Switch>
      <hr />
      <Search />
    </div>
  );
}

export default App;
