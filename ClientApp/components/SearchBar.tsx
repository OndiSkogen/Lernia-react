import * as React from 'react';

const SearchBar = (props: any) => {
    return (
        <div>
            <input type='text' value={props.searchText} onKeyUp={props.enterSearch} onChange={props.change} />
            <button onClick={props.click} disabled={!(props.searchText.trim())}>Sök</button>
        </div>
    )
}
export default SearchBar;