import React, {useEffect, useState} from 'react';
import {ContainerStyle, SpinnerBlockStyle, SpinnerStyle} from "../styles/General.styled"
import Header from "../components/Header";
import { 
    ButtonStyle, LowBarStyle, LowBarTextStyle, ItemImgStyle, ItemMainBlockStyle, ItemMainTextBlockStyle, ItemMainTextTitleStyle, ItemTextParagraphStyle
} from "../styles/Item.styled";
import {getClothesById} from "../store/axios";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCartAsync} from "../redux/cartSlice";


function Item({match}) {
    const {params: {id}} = match;
    const [clothes, setClothes] = useState(false);
    const [spinner, setSpinner] = useState(true);

    const dispatch = useDispatch();
    
    function onAddToCartClick() {
        dispatch(addToCartAsync(clothes.id))
    }

    useEffect(() => {
        getClothesById(id).then(clothes => {
            setClothes(clothes);
            setSpinner(false)
        })
    }, [id]);

    return (
        <>
            <Header search={false}/>
                {spinner ?
                    <SpinnerBlockStyle>
                        <SpinnerStyle animation="border"/>
                    </SpinnerBlockStyle>
                    : (<ContainerStyle>
                        <ItemMainBlockStyle>
                            <ItemImgStyle src={clothes.img} alt="Logo"/>
                            <ItemMainTextBlockStyle>
                                <ItemMainTextTitleStyle>{clothes.title}</ItemMainTextTitleStyle>
                                <ItemTextParagraphStyle>Size: {clothes.size}</ItemTextParagraphStyle>
                                <ItemTextParagraphStyle>Price: {clothes.price} UAH</ItemTextParagraphStyle>
                                <ItemTextParagraphStyle>Made in {clothes.made_in}</ItemTextParagraphStyle>
                                <ItemTextParagraphStyle>Gender: {clothes.gender}</ItemTextParagraphStyle>
                                <ItemTextParagraphStyle>{clothes.description}</ItemTextParagraphStyle>
                            </ItemMainTextBlockStyle>
                        </ItemMainBlockStyle>
           <LowBarStyle>
                <LowBarTextStyle>Price: {clothes.price} UAH</LowBarTextStyle>
                <div>
                    <Link to="/catalog">
                        <ButtonStyle>Go back</ButtonStyle>
                    </Link>
                    <ButtonStyle onClick={onAddToCartClick}>Add to cart</ButtonStyle>
                </div>
            </LowBarStyle>  
        </ContainerStyle>)
                }
        </>
    );
};

export default Item;