import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import AddUser from "./AddUser";
import UserList from "./UserList";
class App extends Component {
  state = {
    users: [],
  };
  createContact = (user) => {
    user.numGamesPlayed = 0;
    this.setState((currState) => ({
      users: [...currState.users, user],
    }));
    console.log(user);
    console.log(this.state.users);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>
        <Navbar />
        <AddUser users={this.state.users} onAddUser={this.createContact} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
