import React,{useContext} from "react";
import { UserProvider } from "./Provider";
 

function Consumer(){
    const user = useContext(UserProvider)

    return(
        <>
        {user?(<h2>Welcome ,{user.name} {user.email}</h2>):(<h2>Please Login</h2>)}
        </>
    )
}
export default Consumer;