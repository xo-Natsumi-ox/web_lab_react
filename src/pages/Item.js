import React, { Component, useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { getClothesById } from '../connection/connection.js'
import { useDispatch } from 'react-redux';
import {PageItemStyle, ItemStyle, CharacteristicStyle, TextStyle, CharacteristicStyleDiv, TitleStyle, DiscriptionStyle, ItemDownStyle, PriceStyle, ButtonStyle} from '../styles/item.styles.js'


function Item() {

    if (window.location.href.indexOf('id')==-1) {
        window.location.replace(window.location.href+'?id');
   }
    const dispatch = useDispatch();

    const { id } = useParams();
    // async function getItem(id) {
    //     setShirt(await getClothesById(id))
    // }
    const[shirt, setShirt] = useState([]);

    useEffect(() => {
        (async function () {
            setShirt(await getClothesById(id));
        })()
    });    

    return (
        <>
        <PageItemStyle>
            <ItemStyle>
                <img src={shirt.img} height='400px' width='350px' />
                <TextStyle>
                    <CharacteristicStyleDiv>
                        <CharacteristicStyle>Size: {shirt.size}</CharacteristicStyle>
                        <CharacteristicStyle>Gender: {shirt.gender}</CharacteristicStyle>
                   </CharacteristicStyleDiv>
                    <TitleStyle>{shirt.title}</TitleStyle>
                    <DiscriptionStyle>{shirt.description}</DiscriptionStyle>
                </TextStyle>
            </ItemStyle>
            <ItemDownStyle>
            <PriceStyle>Price: {shirt.price}UAH</PriceStyle>
            <div>
                <Link to={"/Catalog"}><ButtonStyle>Go back</ButtonStyle></Link>  
                <ButtonStyle>Add to cart</ButtonStyle>
            </div>
            </ItemDownStyle>
        </PageItemStyle>
        </>
    )
}

export default Item;
