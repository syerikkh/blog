import React, { useState } from 'react'
import { createContext } from 'react'

export const SearchContextValue = createContext(0);

export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    console.log('search', searchValue)
    return (
        <SearchContextValue.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContextValue.Provider>
    )
}
