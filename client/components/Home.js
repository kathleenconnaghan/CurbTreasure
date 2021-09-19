import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { me } from "../store";


//This is what renders ONLY IF A USER IS LOGGED IN. (Controlled via the Routes.js page - Home links to login page if user is not logged in, and to this page if they are logged in.)

class Home extends React.Component {
  render() {
    const imageStyle = {
      width: '400px'
    };
    const { email } = this.props.auth;
    var name = email.substring(0, email.lastIndexOf("@"));
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return (

    <div>
      <h1>Welcome to Curb Treasure</h1>
              <h2>Where another person's trash is your potential treasure!</h2>
      <div id="navbar">
        <nav>
          {this.props.isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              
              <Link to="/items">Browse Free Items</Link>
              <Link to="/addItem">Upload Treasure</Link>
              <img src="https://image.flaticon.com/icons/png/512/827/827184.png" style={imageStyle}/>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <NavLink to="/">Home</NavLink>
              <NavLink to="/items">Free Items</NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </div>
          )}
        </nav>
        <hr />
      </div>
      </div>
    );
  }
}


const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    auth: state.auth,
  };
};

export default connect(mapState, null)(Home);
