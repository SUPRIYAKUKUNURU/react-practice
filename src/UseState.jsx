import React, { useEffect, useState } from 'react'
import Normal from "./assets/Normal.jpg"; 
import Priya from "./assets/Priya..jpg"

function UseState() {
    const[users,setUsers] = useState([]);
    useEffect(()=>{
        const localUsers = [
            {id:1 , name:"Supriya",image:Normal},
            {id:2, name:"Priya",image:Priya}
        ];
        setUsers(localUsers);
    },[]);


  return (
    <>
    <div>
        <h2>Topic:UseEffect</h2>
        <h3>User List</h3>
        <ul>
            {users.map(user =>(
                <li key ={user.id}>{user.name}
                <img src ={user.image} alt ={user.name}style={{width:"100px"}} />
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default UseState