import React, { Component } from 'react'
import FilterSelect from './FilterSelect'
import Search from './Search'
import {FilterStyle,OnlyFilterStyle} from '../styles/searchAndFilter.styles'



function Filter({ size, forWomMan, search }) {
    return(
        <FilterStyle>
                <OnlyFilterStyle>
                <FilterSelect name='Gender' options={[ 'W', 'M']} state={forWomMan} />
                <FilterSelect name='Size' options={['S', 'M', 'L', 'XL', 'XXL', 'XXXL']} state={size}/>
                </OnlyFilterStyle>
            <Search state={search} />
        </FilterStyle>
        
    )
}

export default Filter;
