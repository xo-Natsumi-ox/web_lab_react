import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/Home.js'
import CatalogPage from './pages/Catalog.js';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import ItemPage from "./pages/Item.js";
import clothesList from "./models/modelItem";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage clothesList={clothesList} />
                </Route>
                <Route path="/catalog">
                    <CatalogPage clothesList={clothesList} />
                </Route>
                <Route path="/clothes/:id">
                    <ItemPage clothesList={clothesList} />
                </Route>
            </Switch>
            <Footer />
        </Router >
    );
}

export default App;
