import React from 'react'
import { useState, useEffect } from 'react'
import Img from '../images/eee2.png'
import {ModelContainer,Model, ModelH, ModelH3, ModelBtn} from '../styles/model.styles.js'
import {HomeH3, HomeImg, HomeP, HomeBody, HomeBtn} from '../styles/home.styles'
import { Link } from "react-router-dom";
import { getClothes } from '../connection/connection.js'
import Models from '../models/Models'


function Home() {

    const [clothes, setClothes] = useState(null);
    // const [justClothes, setJustClothes] = useState({});
    const [maxClothes, setMaxClothes] = useState(4);
    const [currentClothes, setCurrentClothes] = useState([]);

    async function getItem() {
        console.log("BBBBB1")
        setClothes(await getClothes())
        console.log("BBBBB2")
    }

    useEffect(() => getItem(), []);

    useEffect(() => {
        if (!clothes) { return }
        // setJustClothes(clothes[0]);
        setCurrentClothes(clothes.slice(0, maxClothes));
    }, [clothes, maxClothes]);

    function viewMore() {
        setCurrentClothes(clothes.slice(1, maxClothes + 4));
        setMaxClothes(maxClothes + 4);
    };

    return ( <div className = "Home" >
        <HomeBody>
            <HomeImg src = { Img }/>
            <div>
                <HomeH3>Movie clothes</HomeH3>
                <HomeP>Lots of clothes of any type and size with different prints from your favorite movies. Just for you!</HomeP>
            </div>
            </HomeBody>
            <ModelContainer>
            {/* <div shirt={justClothes}/> */}
                {currentClothes.map((shirt)=>
                    <Model key={shirt.id}>
                        <img src={shirt.img} width='150px' height='180px'/>
                        <ModelH3>{shirt.title}</ModelH3>
                        <ModelH>Size: {shirt.size}</ModelH>
                        <ModelH>Gender: {shirt.gender}</ModelH>
                        <ModelH>Price: {shirt.price} UAH</ModelH>
                        <Link to={"/clothes/" + shirt.id}><ModelBtn>Buy</ModelBtn></Link>
                    </Model>
                )}
                </ModelContainer>
            <HomeBtn onClick={viewMore}>View more</HomeBtn>
        </div>
    );
}

export default Home;
