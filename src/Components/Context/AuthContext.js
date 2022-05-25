import React, {createContext, useState} from 'react'

export const MyContext = createContext();

export const ContextProvider = ({children}) => {

    const [dataLocation, setDataLocation] = useState({
        lat: 15.222,
        long: 52.633
    })
    
    return (
        <MyContext.Provider value={[dataLocation, setDataLocation]}>
            {children}
        </MyContext.Provider>
    )
}