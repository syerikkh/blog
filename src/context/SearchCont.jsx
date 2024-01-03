import React, { useState } from 'react'
import { createContext } from 'react'

export const SearchContext = createContext(null);
export const SearchCont = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>
    )
}
