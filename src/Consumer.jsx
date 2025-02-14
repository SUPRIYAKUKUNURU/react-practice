import React,{useContext} from "react";
import { UserProvider } from "./Provider";
 

function Consumer(){
    const user = useContext(UserProvider)

    return(
        <>
        <div style={{textAlign:"center"}}>
        {user?(<h4>Welcome ,{user.name}</h4>):(<h2>Please Login</h2>)}
        </div>
        </>
    )
}
export default Consumer;