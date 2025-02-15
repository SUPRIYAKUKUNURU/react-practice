import React from 'react'

function UseState() {
    const[users,setUsers] = useState([]);
    useEffect(()=>{
        const localUsers = [
            {id:1 , name:"Supriya"},
            {id:2, name:"Priya"}
        ];
        setUsers(localUsers);
    },[]);


  return (
    <div>
        <h2>Topic:UseEffect</h2>
        <h3>User List</h3>
        <ul>
            {users.map(user =>(
                <li key ={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseState