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



function AppBar(props) {
  return <MuiAppBar elevation={0} position="static" {...props} 
  />;
}


const toolbarStyles = theme => ({
  root: {
    
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 20,
    },
  },
});

//-------------------------------STYLES

const styles = theme => ({
  
  title: {
    fontSize: 24,
    color: theme.palette.primary.main
  },
  toolbar: {
    color: '#00000',
    background: '#ffffff',
  },

  left: {
    flex: 1,
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
    background: theme.palette.common.green,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },

});

//=========================== Component

class Navbar extends React.Component {
  render() {

    return (
      <div id="navbar">
        <img src="https://img.icons8.com/bubbles/2x/treasure-chest.png" />
         <img src="https://fontmeme.com/permalink/210816/5f8f6f432b9bee4830d9e3d4b037b357.png" alt="pirates-of-the-caribbean-font" border="0"/>
        <nav>
          {this.props.isLoggedIn ? (
            <div>
              <AppBar position="fixed">
                <Toolbar className={styles.toolbar}>
                  <div className={styles.left} />
                  <Button
                 
                    underline="none"
                    color="inherit"
                    className={styles.title}
                    href="/"
                  >
                     <img
                      src="https://img.icons8.com/bubbles/2x/treasure-chest.png"/>
                     <img src="https://fontmeme.com/permalink/210816/5f8f6f432b9bee4830d9e3d4b037b357.png" alt="pirates-of-the-caribbean-font" border="0"

                    />
                  </Button>
                  <Button
                    style={{ backgroundColor: '#fbcc5c', margin: 10 }}
                    underline="none"
                    color="inherit"
                    className={styles.title}
                    href="/items"
                  >
                    {"Browse Items"}
                  </Button>
                  <Button
                    style={{ backgroundColor: '#7ba4ca', margin: 10 }}
                    underline="none"
                    color="inherit"
                    className={styles.title}
                    href="/addItem"
                  >
                    {"Add Item"}
                  </Button>
                  <Button
                  style={{ backgroundColor: '#b59b9f', margin: 10 }}
                    underline="none"
                    color="inherit"
                    className={styles.title}
                    onClick={() => {
                      this.props.handleClick();
                    }}
                  >
                    {"Log Out"}
                  </Button>
          
                </Toolbar>
              </AppBar>
            </div>
          ) : ( // If the user is not logged in
            <div>
              <AppBar position="fixed">
                <Toolbar className={styles.toolbar}>
                  <div className={styles.left} />
                  <Button
                 
                    underline="none"
                
                    className={styles.title}
                    href="/"
                  >
                    <img src="https://img.icons8.com/bubbles/2x/treasure-chest.png"/>
                        <img src="https://fontmeme.com/permalink/210816/5f8f6f432b9bee4830d9e3d4b037b357.png" alt="pirates-of-the-caribbean-font" border="0"
                    />
                  </Button>
                  <Button
                   style={{ backgroundColor: '#fbcc5c', margin: 10 }}
                    underline="none"
                    color="inherit"
                    className={styles.title}
                    href="/items"
                  >
                    {"Browse Items"}
                  </Button>
                  <div className={styles.right}>
                    <Button
                      color="inherit"
                      style={{ backgroundColor: '#7ba4ca', margin: 10 }}
                      underline="none"
                      className={styles.rightLink}
                      href="/login"
                    >
                      {"Log In"}
                    </Button>
                    <Button
                      color="inherit"
                      style={{ backgroundColor: '#b59b9f', margin: 10 }}
                      underline="none"
                      className={styles.rightLink}
                      href="/signup"
                    >
                      {"Sign Up"}
                    </Button>
              
                  </div>
                </Toolbar>
              </AppBar>
              <div className={styles.placeholder} />
            </div>
          )}
        </nav>
        <hr />
      </div>
    );
  }
}

// ---------------------------------------------------------- Map State & Dispatch

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    auth: state.auth,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
