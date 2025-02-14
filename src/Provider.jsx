import React, { createContext} from "react";


export const UserProvider = createContext(null);
 
export function Provider({children}){

    const user = {name:"Supriya",email:"supriyakukunuru2001@gamil.com"}
   
    return (
        <div style={{textAlign:"center"}}>
            <h2>Topic:UseContext</h2>
            <UserProvider.Provider value = {user}>
                {children}
            </UserProvider.Provider>
        
        </div>
    );
}


