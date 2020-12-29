import React from 'react';
import {SignOutButtonStyle} from "../styles/General.styled"
import logo from "../images/logo.png";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAccess} from "../redux/accessSlice";
import {NavbarContainerStyle, NavbarStyle, NavbarFlex,Nav, SearchInputStyle, SearchStyle} from "../styles/Header.styled"


function Header({clothes, setClothesToShow}) {

    const dispatch = useDispatch();

    function logOut() {
        localStorage.clear();
        dispatch(setAccess(false));
    }

    const searchItems = () => {
        let clothesToShow = []
        const inputString = document.getElementById('searchInput').value.toLowerCase();

        clothesToShow = clothes.filter(clothes => {
            const title = clothes.title.toLowerCase().includes(inputString);
            return title;
        });
        setClothesToShow([...clothesToShow]);
    }

    return (
        <NavbarContainerStyle>
            <NavbarFlex>
                    <img src={logo} height="80px" width="80px"/>
                    <NavbarStyle>
                        <Link to="/">
                            <Nav href="/"> Home </Nav>
                        </Link>
                        <Link to="catalog">
                            <Nav href="/catalog"> Catalog </Nav>
                        </Link>
                        <Link to="cart">
                            <Nav href="/cart"> Cart </Nav>
                        </Link>
                        <SignOutButtonStyle onClick={logOut}>Sing out</SignOutButtonStyle>
                    </NavbarStyle>
            </NavbarFlex>
                    <SearchStyle>
                        <SearchInputStyle onChange={searchItems} id="searchInput" type="text" placeholder="What do you want to find?"/>
                    </SearchStyle>
                    
        </NavbarContainerStyle>
    );
}

export default Header;