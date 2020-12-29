import {FilterBlock, FilterSelectsStyle, FilterContainer, FilterTextStyle, SelectsStyle} from "../styles/Filter.styled";
import {NavDropdown} from "react-bootstrap";
import {FilterButtonStyle} from "../styles/General.styled";
import React, {useEffect, useState} from "react";
import {sizeConstants, priceConstants, genderConstants} from "../constants/constants";
import {getFilteredClothes} from "../store/axios";

function Filter({setClothesToShow, setSpinner}) {

    const [filter, setFilter] = useState({
        priceFilter: priceConstants.default,
        sizeFilter: sizeConstants.all,
        genderFilter: genderConstants.all
    });

    useEffect(() => {
        getFilteredClothes(filter.priceFilter, filter.sizeFilter, filter.genderFilter).then(filteredClothes => {
            setClothesToShow([...filteredClothes.clothes]);
            setSpinner(false);
        })
        return () => {
            setSpinner(true);
        };
    }, [filter, setClothesToShow, setSpinner]);


    const [priceActive, setPriceActive] = useState({
        asc: false,
        desc: false,
        default: true
    });

    const [sizeActive, setSizeActive] = useState({
        sizeS: false,
        sizeL: false,
        sizeM: false,
        sizeXL: false,
        sizeXXL: false,
        all: true
    });

    const [genderActive, setGenderActive] = useState({
        man: false,
        woman: false,
        all: true
    });

    const onPriceClick = (e) => {
        const text = e.target.text;
        if (text === priceConstants.asc) {
            if (priceActive.asc === false) {
                setPriceActive({
                    asc: true,
                    desc: false,
                    default: false
                });
                setFilter({...filter, priceFilter: text});
            }
        } else if (text === priceConstants.desc) {
            if (priceActive.desc === false) {
                setPriceActive({
                    asc: false,
                    desc: true,
                    default: false
                });
                setFilter({...filter, priceFilter: text});
            }
        } else if (text === priceConstants.default) {
            if (priceActive.default === false) {
                setPriceActive({
                    asc: false,
                    desc: false,
                    default: true
                });
                setFilter({...filter, priceFilter: text});
            }
        }
    }

    const onSizeClick = (e) => {
        const text = e.target.text;
        if (text === sizeConstants.sizeS) {
            if (sizeActive.sizeS === false) {
                setSizeActive({
                    sizeS: true,
                    sizeL: false,
                    sizeM: false,
                    sizeXL: false,
                    sizeXXL: false,
                    all: false
                });
                setFilter({...filter, sizeFilter: text});
            }
        } else if (text === sizeConstants.sizeL) {
            if (sizeActive.sizeL === false) {
                setSizeActive({
                    sizeS: false,
                    sizeL: true,
                    sizeM: false,
                    sizeXL: false,
                    sizeXXL: false,
                    all: false
                });
                setFilter({...filter, sizeFilter: text});
            }
        } else if (text === sizeConstants.sizeM) {
            if (sizeActive.sizeM === false) {
                setSizeActive({
                    sizeS: false,
                    sizeL: false,
                    sizeM: true,
                    sizeXL: false,
                    sizeXXL: false,
                    all: false
                });
                setFilter({...filter, sizeFilter: text});
            }
        } else if (text === sizeConstants.sizeXL) {
            if (sizeActive.sizeXL === false) {
                setSizeActive({
                    sizeS: false,
                    sizeL: false,
                    sizeM: false,
                    sizeXL: true,
                    sizeXXL: false,
                    all: false
                });
                setFilter({...filter, sizeFilter: text});
            }
        } else if (text === sizeConstants.sizeXXL) {
            if (sizeActive.sizeXXL === false) {
                    setSizeActive({
                        sizeS: false,
                        sizeL: false,
                        sizeM: false,
                        sizeXL: false,
                        sizeXXL: true,
                        all: false
                    });
                    setFilter({...filter, sizeFilter: text});
                }
        } else if (text === sizeConstants.all) {
            if (sizeActive.all === false) {
                setSizeActive({
                    sizeS: false,
                    sizeL: false,
                    sizeM: false,
                    sizeXL: false,
                    sizeXXL: false,
                    all: true
                });
                setFilter({...filter, sizeFilter: text});
            }
        }
    }

    const onGenderClick = (e) => {
        const text = e.target.text;
        if (text === genderConstants.woman) {
            if (genderActive.woman === false) {
                setGenderActive({
                    woman: true,
                    man: false,
                    all: false
                });
                setFilter({...filter, genderFilter: text});
            }
        } else if (text === genderConstants.man) {
            if (genderActive.man === false) {
                setGenderActive({
                    woman: false,
                    man: true,
                    all: false
                });
                setFilter({...filter, genderFilter: text});
            }
        } else if (text === genderConstants.all) {
            if (genderActive.all === false) {
                setGenderActive({
                    woman: false,
                    man: false,
                    all: true
                });
                setFilter({...filter, genderFilter: text});
            }
        
        }
    }

    const onClearClick = () => {
        setFilter({
            priceFilter: priceConstants.default,
            sizeFilter: sizeConstants.all,
            genderFilter: genderConstants.all
        });
        setPriceActive({
            asc: false,
            desc: false,
            default: true
        });
        setSizeActive({
            sizeS: false,
            sizeL: false,
            sizeM: false,
            sizeXL: false,
            sizeXXL: false,
            all: true
        });
        setGenderActive({
            woman: false,
            man: false,
            all: true
        });
    }

    return (
        <>
                <FilterContainer>
                    <SelectsStyle>
                            <FilterBlock>
                                <FilterTextStyle>Price:</FilterTextStyle>
                                <NavDropdown title={filter.priceFilter}>
                                    <FilterSelectsStyle onClick={onPriceClick} active={priceActive.asc}>{priceConstants.asc}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onPriceClick} active={priceActive.desc}>{priceConstants.desc}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onPriceClick} active={priceActive.default}>{priceConstants.default}</FilterSelectsStyle>
                                </NavDropdown>
                            </FilterBlock>
                            <FilterBlock>
                                <FilterTextStyle>Size:</FilterTextStyle>
                                <NavDropdown title={filter.sizeFilter}>
                                    <FilterSelectsStyle onClick={onSizeClick} active={sizeActive.sizeL}>{sizeConstants.sizeL}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onSizeClick} active={sizeActive.sizeM}>{sizeConstants.sizeM}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onSizeClick} active={sizeActive.sizeS}>{sizeConstants.sizeS}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onSizeClick} active={sizeActive.sizeXL}>{sizeConstants.sizeXL}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onSizeClick} active={sizeActive.sizeXXL}>{sizeConstants.sizeXXL}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onSizeClick} active={sizeActive.all}>{sizeConstants.all}</FilterSelectsStyle>
                                </NavDropdown>
                            </FilterBlock>
                            <FilterBlock>
                                <FilterTextStyle>Gender:</FilterTextStyle>
                                <NavDropdown title={filter.genderFilter}>
                                    <FilterSelectsStyle onClick={onGenderClick} active={genderActive.man}>{genderConstants.man}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onGenderClick} active={genderActive.woman}>{genderConstants.woman}</FilterSelectsStyle>
                                    <FilterSelectsStyle onClick={onGenderClick} active={genderActive.all}>{genderConstants.all}</FilterSelectsStyle>
                                </NavDropdown>
                            </FilterBlock>
                        <FilterButtonStyle onClick={onClearClick}>Clear</FilterButtonStyle>
                    </SelectsStyle>
                </FilterContainer>
        </>
    );
}

export default Filter;