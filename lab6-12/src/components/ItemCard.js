import React from 'react';
import {
    ItemStyle, ItemTitleStyle,
    ItemParagraphStyle, ItemButtonsBlockStyle, ItemImgStyle, ItemButtonStyle, ItemButtonLinkStyle
} from "../styles/ItemCard.styled"


function ItemCard({item}) {

    return (
        <ItemStyle>
            <ItemImgStyle>
                <img src={item.img}  width="250px" height="300px"/>
            </ItemImgStyle>
            <ItemTitleStyle>{item.title}</ItemTitleStyle>
            <ItemParagraphStyle>Size: {item.size} </ItemParagraphStyle>
            <ItemParagraphStyle>Price: {item.price} UAH</ItemParagraphStyle>
            <ItemParagraphStyle>Made in {item.made_in}</ItemParagraphStyle>
            <ItemParagraphStyle>Gender: {item.gender}</ItemParagraphStyle>
            <ItemButtonsBlockStyle>
                <ItemButtonLinkStyle to={"/catalog" + item.id}>
                    <ItemButtonStyle> Show more </ItemButtonStyle>
                </ItemButtonLinkStyle>
            </ItemButtonsBlockStyle>
        </ItemStyle>
    );
}

export default ItemCard;