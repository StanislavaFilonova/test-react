
import React from "react";
import { Route, Switch, useHistory } from 'react-router-dom';

// import math from "./Math";
import Header from './Header/Header';
import Main from './Main/Main';
import Calculator from './Calculator/Calculator';
import Seafight from './Seafight/Seafight';
import Snake from './Snake/Snake';
import Maze from './Maze/Maze';

//-----------------------------------------------------------------------------------------------------------------------

function App(props) {

    const history = useHistory();

    // Отрисовка
    return (
        <div className="page">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/calculator-game">
                    <Calculator history={history}/>
                </Route>
                <Route exact path="/sea-fight">
                    <Seafight/>
                </Route>
                <Route exact path="/snake-game">
                    <Snake/>
                </Route>
                <Route exact path="/maze-game">
                    <Maze/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
