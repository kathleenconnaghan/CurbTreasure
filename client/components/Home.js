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
import {Card} from "@material-ui/core";


class Home extends React.Component {
  render() {
    return (

        <div className="home-comp">
            <Card className="main-display-card" sx={{maxWidth: '60rem'}}>
                <div>
                    <h1>Welcome Mateys</h1>
                    <h2>Where another person's trash is your potential treasure!</h2>

                    <h4>This site is mobile friendly!</h4>

                    <div>
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
                    </div>
                </div>

                <div className="flex">
                    <Button href="/items" variant="contained" color="primary"
                            style={{ fontSize: 24, maxWidth: '30rem'}}
                    >
                        Browse Items
                    </Button>
                </div>
            </Card>
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
