import React from 'react';
import {
    HomeItemLiStyle, HomeItemTitleStyle,
    HomeItemParagraphStyle, HomeItemImgStyle
} from "../styles/HomeItem.styled"

function HomeItem({item}) {
    return (
        <HomeItemLiStyle>
            <HomeItemImgStyle>
                <img src={item.img}   width="250px" height="300px"/>
            </HomeItemImgStyle>
            <HomeItemTitleStyle>{item.title}</HomeItemTitleStyle>
            <HomeItemParagraphStyle>{item.itemParagraphs}</HomeItemParagraphStyle>
        </HomeItemLiStyle>
    );
}

export default HomeItem;