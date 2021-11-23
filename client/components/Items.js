import React from "react";
import {connect} from "react-redux";
import {fetchItems} from "../store/items";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";


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
        fontSize: 20,
    },
    pos: {
        marginBottom: 0,
    },
    media: {
        height: 0,
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
        if (items.length) {

            console.log(items);
            allItems = items.map(item => {
                return (
                    <Box key={item.id}>
                        <div>
                            <Box m={2}>
                                <Card className={styles.title}>
                                    <div>

                                        <Card sx={{maxWidth: 345}}>

                                            <CardContent>

                                                <Typography gutterBottom variant="h5" component="div" style={{
                                                    fontSize: 28
                                                }}>
                                                    {item.title}
                                                </Typography>

                                                <CardMedia
                                                    component="img"
                                                    height="400"
                                                    href={`/items/${item.id}`}
                                                    image={item.imageUrl}
                                                />

                                                <Typography>
                                                    {item.category}
                                                </Typography>

                                                <Typography>
                                                    {item.description}
                                                </Typography>

                                                <Typography>
                                                    <a href={'https://maps.google.com/?q=' + item.location} target="_blank">
                                                        <RoomOutlinedIcon/> {item.location}
                                                    </a>
                                                </Typography>

                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" href={`/items/${item.id}`}
                                                        variant="contained" color="primary"
                                                        style={{
                                                            maxWidth: '30rem',
                                                            fontSize: 24
                                                        }}> {"View"}</Button>

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
            <div className="items-comp">
                <h1> Free Items to Collect </h1>
                <Box mt={0}>
                    {allItems}
                </Box>
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
