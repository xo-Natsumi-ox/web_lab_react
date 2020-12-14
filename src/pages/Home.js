import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Models from '../models/Models'
import Img from '../images/eee2.png'
import {HomeH3, HomeImg, HomeP, HomeBody, HomeBtn} from '../css/home.styles'

function Home() {
    return ( <div className = "Home" >
        <Header/>
        <HomeBody>
            <HomeImg src = { Img }/>
            <div>
                <HomeH3>Movie clothes</HomeH3>
                <HomeP>Lots of clothes of any type and size with different prints from your favorite movies. Just for you!</HomeP>
            </div>
        </HomeBody>
        <Models/>
        <HomeBtn>View more</HomeBtn>
        <Footer/>
        </div>
    );
}

export default Home;
