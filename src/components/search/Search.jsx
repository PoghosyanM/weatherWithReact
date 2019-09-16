import React from 'react'
import s from "./search.module.css"

const Search = ({setCountry}) => {
    let changeValue = e => {
        if (e.keyCode === 13) {
            setCountry(e.target.value)
        }
    }
    return (
        <div className={s.content} >
            <input 
                type="text" 
                onKeyUp={changeValue}
                placeholder="Enter the city name" />
        </div>
    )
}

export default Search;