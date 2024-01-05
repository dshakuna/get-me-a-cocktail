import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Drink } from '../service/model/Drinks';

type SearchContextType = {
    searchResults: Drink[];
    setSearchResults: React.Dispatch<React.SetStateAction<Drink[]>>;
};

const SearchContext = createContext<SearchContextType>({
    searchResults: [],
    setSearchResults: () => {}
});

export const useSearchContext = () => useContext(SearchContext);
type SearchProviderProps = {
    children: ReactNode;
};

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
    const [searchResults, setSearchResults] = useState<Drink[]>([]);

    return (
        <SearchContext.Provider value={{ searchResults, setSearchResults }}>
            {children}
        </SearchContext.Provider>
    );
};
