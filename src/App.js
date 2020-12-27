import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/Home.js'
import CatalogPage from './pages/Catalog.js';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import ItemPage from "./pages/Item.js";
import CartPage from './pages/Cart.js'

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/catalog">
                    <CatalogPage/>
                </Route>
                <Route path="/clothes/:id">
                    <ItemPage/>
                    </Route>
                <Route path="/cart">
                    <CartPage/>
                </Route>
            </Switch>
            <Footer />
        </Router >
    );
}

export default App;
