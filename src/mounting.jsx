import React, { Component } from "react";

export default class Mounting extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/users")
            .then((response) => response.json())
            .then((data) => this.setState({ users: data }))
            .catch((error) => console.error("Error fetching data:", error));
    }

    render() {
        const { users } = this.state;

        if (users.length === 0) return <h2>Loading...</h2>;

        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Users Data</h1>
                <table
                    style={{ border: "2px solid black", width: "80%", margin: "auto" }}
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
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td style={{ border: "2px solid black" }}>{user.id}</td>
                                <td style={{ border: "2px solid black" }}>{user.username}</td>
                                <td style={{ border: "2px solid black" }}>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
