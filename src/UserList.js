import React from "react";
import PropTypes from "prop-types";
import User from "./User";
class UserList extends React.Component {
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
    this.setState((oldState) => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  };

  render() {
    const { users } = this.props;
    const gamesPlayedButton = (
      <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
        {this.state.showGamesPlayed ? "Hide" : "Show"} the number of Games
        Played
      </button>
    );
    return (
      <div>
        <h1>Users</h1>
        {users && users.length > 0 ? gamesPlayedButton : ""}
        <ol>
          {users.map((user) => (
            <User
              user={user}
              showGamesPlayed={this.state.showGamesPlayed}
              key={user.username}
            />
          ))}
        </ol>
      </div>
    );
  }
}

UserList.PropTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
