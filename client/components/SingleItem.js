import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchSingleItem } from "../store/singleItem";
import { me } from "../store";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
//-------- ICONS
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';

// -------------STYLES 

const styles = theme => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
  
});

//-----------------------------------COMPONENT

export class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount() {
    this.props.getItem(this.props.match.params.id);
  }

  render () {
    const item = this.props.item;
   

    return (
      <div>
        <Typography>{"Treasure for the Takin'"}</Typography>
      <Box m={50} justify="center" alignItems="center">
      <Card className={styles.title}>
  
        <CardMedia component="img" height="400" image={item.imageUrl} title={item.title} />
        <Typography> { "Title: "} { item.title }</Typography>
        <Typography> { "Category: "} { item.category }</Typography>
        <Typography>{ "Description: "} { item.description }</Typography>
        
        <Typography> <RoomOutlinedIcon/> { item.location }</Typography>
      </Card>
    </Box>
    </div>

    )
  }
}
const mapState = state => {
  return {
    auth: state.auth,
    isLoggedIn: !!state.auth.id,
    item: state.item,
  };
};
const mapDispatch = dispatch => {
  return {
    getMe: () => {
      dispatch(me());
    },
    getItem: id => {
      dispatch(fetchSingleItem(id));
    },
  };
};
export default withRouter(connect(mapState, mapDispatch)(SingleItem));
