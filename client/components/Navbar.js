import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../store";
import { me } from "../store";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles, createTheme } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import MuiAppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { palette } from '@material-ui/system';
import {Box, Drawer, IconButton, List, ListItem, ListItemText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



function AppBar(props) {
  return <MuiAppBar elevation={0} position="static" {...props}
  style={{ background: '#3f51b5' }}
  />;
}


const toolbarStyles = theme => ({
  root: {
    color: theme.palette.common.white,
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70,
      color: theme.palette.common.white,
    },
  },
});

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,

  left: {
    flex: 1,
    color: theme.palette.common.white,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});


//=========================== Component

class Navbar extends React.Component {

  constructor() {
    super();
    this.state = {
      drawerOpen: false
    }
  }

  toggleDrawer(open) {
    console.log('toggle', open);
    this.setState({
      drawerOpen: open
    });
  }

  render() {

    return (
      <div id="navbar">

        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>

              <div className="inner-navbar">
                <div className="navbar-title-area">
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                      onClick={() => this.toggleDrawer(true)}
                  >
                    {/*<MenuIcon />*/}
                    <svg style={{width: '1em', height: '1em'}} viewBox="0 0 24 24">
                      <path style={{fill: 'white'}} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                  </IconButton>
                  <Drawer
                      anchor="left"
                      open={this.state.drawerOpen}
                      onClose={() => this.toggleDrawer(false)}
                  >
                    <List>
                      <ListItem button component="a" href="/items">
                        <ListItemText primary="Browse Items" />
                      </ListItem>
                      {this.props.isLoggedIn && (
                          <ListItem button component="a" href="/addItem">
                            <ListItemText primary="Add Item" />
                          </ListItem>
                      )}
                      {this.props.isLoggedIn ? (
                        <ListItem button component="a" onClick={() => { this.props.handleLogoutClick(); }}>
                          <ListItemText primary="Log Out" />
                        </ListItem>
                      ) : (
                        <ListItem button component="a" href="/login">
                          <ListItemText primary="Log In" />
                        </ListItem>
                      )}
                      {!this.props.isLoggedIn && (
                          <ListItem button component="a" href="/signup">
                            <ListItemText primary="Sign Up" />
                          </ListItem>
                      )}
                    </List>
                  </Drawer>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="curb-treasure-title">
                    <a href="/">
                      <img src="https://img.icons8.com/bubbles/2x/treasure-chest.png"/>
                      <span className="curb-treasure-title">Curb Treasure</span>
                    </a>
                  </Typography>
                </div>

                <div className="navbar-button-list">
                  <Button className="nav-bar-button" href="/items">
                    {"Browse Items"}
                  </Button>
                  {this.props.isLoggedIn && (
                      <Button className="nav-bar-button" href="/addItem">
                        {"Add Item"}
                      </Button>
                  )}
                  {this.props.isLoggedIn ? (
                      <Button className="nav-bar-button" onClick={() => { this.props.handleLogoutClick(); }}>
                        {"Log Out"}
                      </Button>
                  ): (
                    <Button className="nav-bar-button" href="/login">
                      {"Log In"}
                    </Button>
                  )}
                  {!this.props.isLoggedIn && (
                      <Button className="nav-bar-button" href="/signup">
                        {"Sign Up"}
                      </Button>
                  )}
                </div>
              </div>

            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  }
}

// ---------------------------------------------------------- Map State & Dispatch

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    auth: state.auth
  };
};

const mapDispatch = dispatch => {
  return {
    handleLogoutClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
