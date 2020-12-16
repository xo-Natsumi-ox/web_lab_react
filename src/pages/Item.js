import React, { Component } from 'react'
import { Link, useParams } from "react-router-dom";
import {PageItemStyle, ItemStyle, CharacteristicStyle, TextStyle, CharacteristicStyleDiv, TitleStyle, DiscriptionStyle, ItemDownStyle, PriceStyle, ButtonStyle} from '../styles/item.styles.js'

function Item(props) {

    const { id } = useParams();
    const item = props.clothesList.find(item => (item.id === parseInt(id)));
    
    return (
        <>
        <PageItemStyle>
            <ItemStyle>
                <img src={item.img} height='400px' width='350px' />
                <TextStyle>
                    <CharacteristicStyleDiv>
                        <CharacteristicStyle>Size: {item.size}</CharacteristicStyle>
                        <CharacteristicStyle>Gender: {item.forWomMan}</CharacteristicStyle>
                   </CharacteristicStyleDiv>
                    <TitleStyle>{item.title}</TitleStyle>
                    <DiscriptionStyle>{item.description}</DiscriptionStyle>
                </TextStyle>
            </ItemStyle>
            <ItemDownStyle>
            <PriceStyle>Price: {item.price}UAH</PriceStyle>
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