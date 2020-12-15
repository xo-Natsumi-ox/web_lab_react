import React, { Component } from 'react'
import { useState } from 'react'


function Search({ state: [searchText, setSearchText] }) {

    const [text, setText] = useState('');

    return (
        <div>
            <input value={text} placeholder="Search.." onChange={e => (setText(e.target.value))} />
            <button onClick={e => (setSearchText(text))}>Search</button>
        </div>
    );
}

export default Search;