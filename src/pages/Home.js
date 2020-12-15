import React from 'react'
import Models from '../models/Models.js'
import { useState } from 'react'
import Img from '../images/eee2.png'
import {ModelContainer,Model, ModelH, ModelH3, ModelBtn} from '../css/model.styles.js'
import {HomeH3, HomeImg, HomeP, HomeBody, HomeBtn} from '../css/home.styles'

function Home(props) {

    const [clothes] = useState(props.clothesList);
    const [justClothes] = useState(props.clothesList[0]);
    const [maxClothes, setMaxClothes] = useState(4);
    const [currentClothes, setCurrentClothes] = useState(clothes.slice(1, maxClothes));

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
            <>
            <ModelContainer>
            <Models title={justClothes.title} size={justClothes.size} forWomMan={justClothes.forWomMan} price={justClothes.price} img={justClothes.img} />
                    {currentClothes.map((clothes) =>
                    <Model key={clothes.id}>
                        <img src={clothes.img} width='150px' height='170px'/>
                        <ModelH3>{clothes.title}</ModelH3>
                        <ModelH>Size: {clothes.size}</ModelH>
                        <ModelH>Gender: {clothes.forWomMan}</ModelH>
                        <ModelH>Price: {clothes.price} UAH</ModelH>
                        <ModelBtn>Buy</ModelBtn>
                    </Model>
                    )}
                </ModelContainer>
        <HomeBtn onClick={viewMore}>View more</HomeBtn>
        </>
        {/* <HomeBtn eventKey="/Catalog" href="/Catalog">View more</HomeBtn> */}
        </div>
    );
}

export default Home;
