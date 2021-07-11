import { createContext,useState } from "react";
import { ContextProvider } from "react-is";


export const UserContext = createContext();

export const UserContextProvider = (props)=>{
    const [User, setUser] = useState(null);
    

    return(
        <UserContext.Provider value={ {user: [User, setUser]}   
        }>
            {props.children}
        </UserContext.Provider>

    );
};