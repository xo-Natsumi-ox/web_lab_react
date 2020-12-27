import React from 'react'
import { useState, useEffect } from 'react'
import {ModelContainer,Model, ModelH, ModelH3, ModelBtn} from '../styles/model.styles.js'
import Filter from '../components/Filter'
import { Link } from "react-router-dom";
import {getFilteredClothes} from '../connection/connection.js';

function Catalog() {

    const [allClothes] = useState(4);
    const [WhichGender, setWhichGender] = useState('None');
    const [WhichSize, setWhichSize] = useState('None');
    const [clothesToShow, setClothesToShow] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [clothes, setClothes] = useState([]);
    useEffect(() => {
        (async function () {
        setClothes(await getFilteredClothes(WhichSize, WhichGender));
        })()
    }, [WhichSize, WhichGender]);
    useEffect(() => {
        const pattern = new RegExp(searchText, 'i');
        let filteredClothes = clothes;

        filteredClothes=clothes.filter(shirt => (pattern.test(shirt.title)));

        setClothesToShow(filteredClothes.slice(0,allClothes));
    }, [allClothes, searchText, clothes]);

    return ( <div className = "Catalog" >
        <>
        <Filter forWomMan={[WhichGender, setWhichGender]}
                    size={[WhichSize, setWhichSize]}
                    search={[searchText, setSearchText]} />
            <ModelContainer>
                {clothesToShow.map((shirt) =>
                    <Model key={shirt.id}>
                        <img src={shirt.img} width='150px' height='170px'/>
                        <ModelH3>{shirt.title}</ModelH3>
                        <ModelH>Size: {shirt.size}</ModelH>
                        <ModelH>Gender: {shirt.gender}</ModelH>
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
