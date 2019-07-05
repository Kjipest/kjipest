import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import LandingPage from "./containers/LandingPage";

export const history = createBrowserHistory();

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Route exact path="/test" component={LandingPage} />
            <LandingPage loading />
        </Router>
    );
};

export default App;
