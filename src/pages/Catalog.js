import React from 'react'
import { useState, useEffect } from 'react'
import {ModelContainer,Model, ModelH, ModelH3, ModelBtn} from '../styles/model.styles.js'
import Filter from '../components/Filter'
import { Link } from "react-router-dom";
import Home from './Home.js';

function Catalog(props) {

    const [allClothes, setAllClothes] = useState(14);
    const [WhichGender, setWhichGender] = useState('None');
    const [WhichSize, setWhichSize] = useState('None');
    const [searchText, setSearchText] = useState('');
    const [clothes, setClothes] = useState(props.clothesList.slice(0, 14));

    useEffect(() => {
        const pattern = new RegExp(searchText, 'i');

        let filteredClothes = props.clothesList.filter(shirt => (searchText === '' ||
            pattern.test(shirt.title)));

        filteredClothes = filteredClothes.filter(shirt => (shirt.size === WhichSize ||
            WhichSize === 'None'));

        setClothes(filteredClothes.filter(shirt => (shirt.forWomMan === WhichGender ||
            WhichGender === 'None')).slice(0, allClothes));
    }, [allClothes, WhichGender, WhichSize, searchText, props.clothesList]);

    return ( <div className = "Catalog" >
        <>
        <Filter forWomMan={[WhichGender, setWhichGender]}
                    size={[WhichSize, setWhichSize]}
                    search={[searchText, setSearchText]} />
            <ModelContainer>
                {clothes.map((shirt) =>
                    <Model key={shirt.id}>
                        <img src={shirt.img} width='150px' height='170px'/>
                        <ModelH3>{shirt.title}</ModelH3>
                        <ModelH>Size: {shirt.size}</ModelH>
                        <ModelH>Gender: {shirt.forWomMan}</ModelH>
                        <ModelH>Price: {shirt.price} UAH</ModelH>
                        <Link to={"/clothes/" + shirt.id}><ModelBtn>Buy</ModelBtn></Link>
                    </Model>
                )}
            </ModelContainer>
        </>
        </div>
    );
}

export default Catalog;
