import React, { Component } from 'react'


function FilterSelect({name, options, state:[value, setValue], ...props }) {
    return(
        <form>
            <label htmlFor='filter'>{name}</label>
            <select name='filter' value={value} onChange={e => setValue(e.target.value)} {...props}>
            <option value='None'>None</option>
            {options.map((option) =>
                    <option key={option} value={option}>{option}</option>
            )}
            </select>
        </form>
    )
}

export default FilterSelect;
