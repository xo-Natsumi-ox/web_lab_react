import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap';
import { NavStyle, NavLinks } from '../css/header.styles'

const Navigation =()=>(
    
    <Nav defaultActiveKey="/" as="ul">
        <NavStyle>
            <NavItem as="li">
                <NavLinks href="/">Home</NavLinks>
            </NavItem>
            <NavItem as="li">
               <NavLinks eventKey="/Catalog" href="/Catalog">Catalog</NavLinks>
            </NavItem>
            <NavItem as="li">
                <NavLinks eventKey="/Cart" href="/Cart">Cart</NavLinks>
            </NavItem>
        </NavStyle>
    </Nav>
)
export default Navigation
