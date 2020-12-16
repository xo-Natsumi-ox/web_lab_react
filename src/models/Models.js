import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {ModelContainer,Model, ModelH, ModelH3, ModelBtn} from '../styles/model.styles.js'

function Models(props) {
    return (
        <ModelContainer>
            <Model>
                <img src={props.img} width='150px' height='180px'/>
                <ModelH3>{props.title}</ModelH3>
                <ModelH>Size: {props.size}</ModelH>
                <ModelH>Gender: {props.forWomMan}</ModelH>
                <ModelH>Price: {props.price} UAH</ModelH>
                <Link to={"/clothes/" + props.id}><ModelBtn>Buy</ModelBtn></Link>
            </Model>
        </ModelContainer>
    );
}

export default Models
