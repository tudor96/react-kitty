import React from 'react'


const SearchBar = ({searchChange}) =>{
    return(
        <div className="" >
            <input 
                type="search"
                placeholder= "search kittes" 
                className="pa1 ba b--blue bg-lightest-blue dib br3 ma2 bw1"
                onChange = {searchChange}
            />
        </div>
    )
}

export default SearchBar;