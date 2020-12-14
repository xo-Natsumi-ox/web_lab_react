import React, { Component } from 'react'
import ImageDeadpool from '../images/hoodiedeadpool.png'
import ImagePotterGlasses from '../images/potterglasses.png'
import MotherOfCats from '../images/motherofcats.webp'
import trangerThings from '../images/strangerthings.png'
import {ModelContainer,Model, ModelP, ModelH3, ModelBtn} from '../css/model.styles.js'

const { useState } = require("react");

function Models(params) {
    const [models, setModels] = useState([
        {
            title: 'Hoodie deadpool',  
            size: "S, M, L, XL, XXL",
            price: 500,
            img: ImageDeadpool,
        },
        {
            title: 'Shirt with Harry Potter glasses',
            size: "S, M, L",
            price: 450,
            img: ImagePotterGlasses
        },
        {
            title: 'Hoodie mother of cats)',
            size: "S, M, XL, XXL",
            price: 600,
            img: MotherOfCats
        },
        {
            title: 'Stranger Hoodie',
            size: "S, M, L, XL, XXL, XXXL",
            price: 300,
            img: trangerThings
        }
    ])

    return (
        <div>
            <ModelContainer>
                {models.map((model, index) =>
                    <Model key={`Item${index}`}>
                        <img src={model.img}width='150px' height='170px'/>
                        <ModelH3>{model.title}</ModelH3>
                        <ModelP>Size: {model.size}</ModelP>
                        <ModelP>Price: {model.price} UAH</ModelP>
                        <ModelBtn>Buy</ModelBtn>
                    </Model>
                )}
            </ModelContainer>
        </div>
    );
}
export default Models