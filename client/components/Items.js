import React from "react";
import { connect } from "react-redux";
import { fetchItems } from "../store/items";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";


const styles = theme => ({
  root: {
    minWidth: 400,
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
    marginBottom: 2,
  },
  media: {
    height: 400,
  },

});

export class Items extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

    render() {
      const items = this.props.items;

      let allItems = 'Loading.....'

      const imageStyle = {
        width: '200px',
        heigth: '200px',
      };
      if(items.length) {
        
        allItems = items.map(item => {
          return ( 
            <Box m={20}>
              <div key={item.id}>
                <Box m={2}>
                <Card className={styles.title}>
                <div>

                  <Button href ={`/items/${item.id}`}className="itemlink"> </Button>

                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                          component="img"
                          height="400"
                          image= {item.imageUrl}
                        />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              {item.title}
                              </Typography>

                              <Typography>
                              {item.category}
                              </Typography>

                              <Typography>
                              {item.description}
                              </Typography>

                              <Typography>
                              {item.location}
                              </Typography>

                            </CardContent>
                        <CardActions>
                            <Button size = 'small' href ={`/items/${item.id}`}className="itemlink" > {"View"}</Button>

                        </CardActions>
                      </Card>
                </div>
                </Card>
              </Box>
            </div>
          </Box>
        )
    })
  }

      return (
        <div>
          <h1> Free Items to Collect </h1>
          <div> {allItems} </div>
        </div>
      )

    }
  }

// ---------------------------------------------------------- Map State & Dispatch
const mapState = state => {
  return {
    items: state.items,
  };
};

const mapDispatch = dispatch => {
  return {
    getItems: () => {
      dispatch(fetchItems());
    },
  };
};

export default connect(mapState, mapDispatch)(Items);
