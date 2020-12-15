import React, { Component } from 'react'

import {ModelContainer,Model, ModelH, ModelH3, ModelBtn} from '../css/model.styles.js'

function Models(props) {
    return (
            <ModelContainer>
                    <Model>
                        <img src={props.img} width='150px' height='170px'/>
                        <ModelH3>{props.title}</ModelH3>
                        <ModelH>Size: {props.size}</ModelH>
                        <ModelH>Gender: {props.forWomMan}</ModelH>
                        <ModelH>Price: {props.price} UAH</ModelH>
                        <ModelBtn>Buy</ModelBtn>
                    </Model>
            </ModelContainer>
    );
}
export default Models