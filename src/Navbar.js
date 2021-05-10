import React from "react";
import propTypes from "prop-types";
class Navbar extends React.Component {
  static defaultProps = {
    title: "Simple Video Game",
  };
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
Navbar.propTypes = {
  title: propTypes.string,
};
export default Navbar;
