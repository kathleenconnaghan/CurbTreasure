import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import Items from "./components/Items";
import SingleItem from "./components/SingleItem";
import AddItem from "./components/AddItem";
import { me } from "./store";
import { fetchItems, addItem } from "./store/items";
import ItemUploaded from "./components/ItemUploaded";

// COMPONENT

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.getItems()
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/items" component={Items} />
            <Route path="/items/:id" component={SingleItem} />
            <Route path="/addItem" component={AddItem} />

          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/items" component={Items} />
            <Route path="/items/:id" component={SingleItem} />
          </Switch>
        )}
      </div>
    );
  }
}

// CONTAINER

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id,
    auth: state.auth,
    items: state.items
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData: () => {
      dispatch(me());
    },
    getItems: () => {
      dispatch(fetchItems());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
