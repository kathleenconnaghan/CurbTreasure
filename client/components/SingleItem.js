import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {fetchSingleItem} from "../store/singleItem";
import {me} from "../store";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
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
        height: 600,
    },


});

//-----------------------------------COMPONENT

export class SingleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        this.props.getItem(this.props.match.params.id);
    }

    render() {
        const item = this.props.item;


        return (
            <div className="single-item-comp">
                <h3>{"Treasure for the Takin'"}</h3>
                <Box justify="center" alignItems="center">
                    <Card className={styles.title}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{
                                fontSize: 28
                            }}>
                                {item.title}
                            </Typography>

                            <CardMedia component="img" height="400" image={item.imageUrl} title={item.title}/>
                            <h3> {"Category: "} {item.category}</h3>
                            <h4>{"Description: "} {item.description}</h4>

                            <a href={'https://maps.google.com/?q=' + item.location} target="_blank">
                                <RoomOutlinedIcon/> {item.location}
                            </a>
                        </CardContent>
                    </Card>
                </Box>
            </div>

        )
    }
}

const mapState = state => {
    return {
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
