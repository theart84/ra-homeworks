// Core
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Menu from "./components/Menu/Menu";
import HomePage from "./pages/HomePage/HomePage";
import TimeAttackPage from "./pages/TimeAttackPage/TimeAttackPage";
import DriftPage from "./pages/DriftPage/DriftPage";
import ForzaPage from "./pages/ForzaPage/ForzaPage";

function App() {
  return (
    <div>
      <Menu/>
      <div className="page">
        <Switch>

          <Route path="/" exact component={HomePage}/>
          <Route path="/drift" component={DriftPage}/>
          <Route path="/timeattack" component={TimeAttackPage}/>
          <Route path="/forza" component={ForzaPage}/>
          <Route path="*">Такой страницы не существует</Route>

        </Switch>
      </div>
    </div>
  );
}

// Exports
export default App;

