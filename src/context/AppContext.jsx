/* Used to create global variables which may be used later in other pages */
import {createContext, useEffect, useState} from 'react'

export const AppContext = createContext();

export const AppProvider = ({children})=>{
    const[user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )
    const[selectedGenres, setSelectedGenres] = useState(
        JSON.parse(localStorage.getItem("selectedGenres")) || []
    )

    
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres))
    }, [user, selectedGenres])

    return(
        <AppContext.Provider value={{user, setUser, selectedGenres, setSelectedGenres}}>
            {children}
        </AppContext.Provider>
    )
}