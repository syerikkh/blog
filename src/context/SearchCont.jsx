import React, { useState } from 'react'
import { createContext } from 'react'

export const SearchContextValue = createContext(null);

export const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContextValue.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContextValue.Provider>
    )
}
