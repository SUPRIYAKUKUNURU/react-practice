import React, { createContext, useEffect } from "react";


export const UserProvider = createContext(null);
 
export function Provider({children}){

    const user = {name:"Supriya",email:"supriyakukunuru2001@gamil.com"}
   
    return (
        <div>
            <UserProvider.Provider value = {user}>
                {children}
            </UserProvider.Provider>
        
        </div>
    );
}


