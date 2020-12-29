import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Filter from "../components/Filter";
import ItemCard from "../components/ItemCard"
import {ContainerStyle, SpinnerBlockStyle, SpinnerStyle} from "../styles/General.styled"
import {CatalogListStyle, CatalogTop} from "../styles/Catalog.styled"
import {getClothes} from "../store/axios";


function Catalog() {

    const [clothesToShow, setClothesToShow] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        getClothes().then(clothes => {
            setClothesToShow([...clothes.clothes]);
            setSpinner(false);
        })
    }, []);

    return (
        <>
            <Header search={true}/>
            <CatalogTop>
                <Filter setClothesToShow={setClothesToShow} setSpinner={setSpinner}/>
                {spinner ?
                    <SpinnerBlockStyle>
                        <SpinnerStyle animation="border"/>
                    </SpinnerBlockStyle>
                    :
                    (<ContainerStyle>
                        <CatalogListStyle>
                            {clothesToShow.map((item) => (
                                <ItemCard key={item.id} item={item}/>
                            ))}
                        </CatalogListStyle>
                    </ContainerStyle>)
                }
            </CatalogTop>
        </>
    );
}

;

export default Catalog;