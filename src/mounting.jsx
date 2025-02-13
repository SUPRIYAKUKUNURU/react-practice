import React, { Component } from "react";

export default class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
    // console.log("Constuctor called");
  }
  //  static getDerivedStateFromProps(props,state){
  //   console.log("DerivedStateFromProps called");
  //  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/users")
    // ")
      .then((response) => {
        console.log("Response received:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log fetched data
        this.setState({ user: data });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  render() {
    const { user } = this.state;

    if (!user) return <h2>Loading...</h2>;

    return (
        
<>
<button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>

      <h1 style={{ textAlign: "center" }}>UsersData</h1>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <table
    style={{
      border: "2px solid black",
      borderCollapse: "collapse",
      width: "80%",
    }}
    cellPadding={10}
  >
    <thead>
      <tr>
        <th style={{ border: "2px solid black" }}>ID</th>
        <th style={{ border: "2px solid black" }}>Username</th>
        <th style={{ border: "2px solid black" }}>Email</th>
      </tr>
    </thead>
    <tbody>
      {user.map((user) => (
        <tr key={user.id}>
          <td style={{ border: "2px solid black" }}>{user.id}</td>
          <td style={{ border: "2px solid black" }}>{user.username}</td>
          <td style={{ border: "2px solid black" }}>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</>
    );
  }
}
