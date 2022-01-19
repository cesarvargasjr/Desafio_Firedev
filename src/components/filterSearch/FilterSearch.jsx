import React, { useState } from "react";
import ResultSearch from "../resultSearch/ResultSearch";
import './FilterSearch.css'

function FilterSearch() {

    const [data, setData] = useState([]);

    const handleInputChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        if (!value) return;

        const url = `https://kitsu.io/api/edge/anime`;

        fetch(url)
            .then((response) => response.json())
            .then(({ data }) => setData(data));
    };

    console.log('Data', data);

    return (
        <>
            <input type="text" /* name="search" id="search" */ className="Input" onChange={handleInputChange} />
            <ResultSearch data={data} />
        </>
    )
}

export default FilterSearch;