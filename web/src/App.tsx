import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import ApplicationPage from "./containers/ApplicationPage";

export const history = createBrowserHistory();

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Route exact path="/" component={ApplicationPage} />
        </Router>
    );
};

export default App;
