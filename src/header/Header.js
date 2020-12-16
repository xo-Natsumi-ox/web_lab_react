import React, { Component } from 'react'
import logo from '../images/logo.png';
import Navigation from "../components/Navigation.js";
import { HeaderBody, HeaderStyle } from '../styles/header.styles'

function Header() {
    return ( 
        <HeaderBody>
            <header className = "header" >
                <HeaderStyle>
                <img src = { logo } className = "logo" height="100px" alt = "logo"/>
                <nav className = "navigation">
                    <Navigation/>
                </nav>
                </HeaderStyle>
            </header>
        </HeaderBody>
    )
}
export default Header