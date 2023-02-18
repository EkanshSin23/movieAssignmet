import { createContext, useState } from "react";

export const User = createContext()
export const UserContext = ({ children }) => {
    const [movieName, setMovieName] = useState('');


    return (
        <User.Provider value={{ movieName, setMovieName }}>
            {children}
        </User.Provider>
    )
}

