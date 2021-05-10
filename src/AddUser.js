import React from "react";
import PropTypes from "prop-types";

class AddUser extends React.Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
    },
    userExists: false,
  };

  contactExits = (currUsername) => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currUsername) {
        return true;
      }
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userExists = this.contactExits(this.state.user.username);
    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }
    this.setState(() => ({
      userExists,
    }));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((currState) => ({
      ...currState,
      user: {
        ...currState.user,
        [name]: value,
      },
    }));
  };

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === "" || lastName === "" || username === "";
  };

  render() {
    const { firstName, lastName, username } = this.state.user;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last name"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <br />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <button disabled={this.isDisabled()}>Add your Record</button>
        </form>
        {this.state.userExists ? (
          <p className="error">Username not available</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

AddUser.prototypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUser;
