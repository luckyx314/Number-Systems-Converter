import React, {useState, createContext} from 'react';

export const MainInputContext = createContext();

export const MainInputProvider = props => {
    const [inputValue, setInputValue] = useState({
        value: ''
    });

    return (
        <MainInputContext.Provider value={[inputValue, setInputValue]}>
            {props.children}
        </MainInputContext.Provider>
    )
}