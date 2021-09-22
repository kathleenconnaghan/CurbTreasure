import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//Imported UI elements:
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { palette } from "@material-ui/system";


class Home extends React.Component {
  render() {
    return (
   
      <Box mt={0}>
         <Link to="/items"> <img
          src="./images/treasure-map.jpg"
          alt="banner"
          width="100%"
        />
        </Link>
        <Typography> 
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
              </div>
        </Typography>
      
        <Button href="/items">Click Here to Shop Our itemssss!</Button>
      </Box>
     
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
