
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Surveys from "./pages/Surveys/Surveys";
import Details from "./pages/Details/Details";

class App extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/:code" component={<Details/>} />
                </div>
            </HashRouter>
        );
    }
}

const Home = () =><Surveys/>
const Details = () =><Details/>

export default App;
