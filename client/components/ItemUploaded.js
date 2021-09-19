import React from "react";
import { Link } from "react-router-dom";

class ItemUploaded extends React.Component {
  render() {
    return (
      <div>
        <h2>Your treasure has been listed</h2>
        <h3>Thank you for sharing</h3>
        <h4>You can go see more treasure or continue adding your own!</h4>
        <Link to="/items">Browse Items</Link>
        <Link to="/addItem">Add Another Treasure</Link>
      </div>
    );
  }
}

export default ItemUploaded;