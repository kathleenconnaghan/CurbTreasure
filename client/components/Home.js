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
  
    return (
      
      
    <div>
      <h1>Welcome Mateys</h1>
             
      <h2>Where another person's trash is your potential treasure!</h2>
              <div>
              <p> 
                Curb Treasure is completely free. Browse items in your local area and after you collect them, mark them plundered! 
                
                Or if you have to move house, spring clean or just rid yourself of the burden of your treasure, upload an image and a location. 
                
                All of it is free to post and collect, completely anonymous and contact-less!
                People usually plunder:
                <ul> 
                  <li> Almost new spices, baking items, canned goods: nothing that will spoil in the sun! </li>
                  <li> Indoor and outdoor furniture, appliances, utensils and other household items </li>
                  <li> Electronics, plants, candles, bags and bric-a-brac!  </li>
                  <li> Clean clothing, bedding, curtains and other fabrics should new or almost new </li>
                </ul>

              </p>
              </div>
      <div id="navbar">
        <nav>
          {this.props.isLoggedIn ? (
            
            <div>
              {/* The navbar will show these links after you log in */}
      <div>
              <div>
      <h1> Where another person's trash is your potential treasure!</h1>
             
      <h2> Welcome Mateys! </h2>
              <div>
              <p> 
                Curb Treasure is completely free. Browse items in your local area and after you collect them, mark them plundered! 
                
                Or if you have to move house, spring clean or just rid yourself of the burden of your treasure, upload an image and a location. 
                
                All of it is free to post and collect, completely anonymous and contact-less!
                People usually plunder:
                <ul> 
                  <li> Almost new spices, baking items, canned goods: nothing that will spoil in the sun! </li>
                  <li> Indoor and outdoor furniture, appliances, utensils and other household items </li>
                  <li> Electronics, plants, candles, bags and bric-a-brac!  </li>
                  <li> Clean clothing, bedding, curtains and other fabrics should new or almost new </li>
                </ul>

              </p>
              </div>
              </div>
              </div>
              
              {/* <img src="https://image.flaticon.com/icons/png/512/827/827184.png" style={imageStyle}/> */}
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
