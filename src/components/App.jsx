import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import { getUser } from '../services/user';

import UserForm from './UserForm';
import UserDetail from './UserDetail';

import NavBar from './NavBar';

class App extends Component {

  componentDidMount() {
    console.log(this.props.getUser(), "componentDidMount");
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, "nextProps");
    console.log(nextState, "nextState");
  }

  render() {
    return (
      <div>
            {/* <link to="user-detail">User Details</link> */}
          <BrowserRouter>
            <div>
            <NavBar />
              <Route path="/create" component={UserForm} />
              <Route exact path="/add-user" component={UserForm} />
              <Route exact path="/user-detail" component={UserDetail} />
            </div>
          </BrowserRouter>
          {/* <Link to="/user-detail">User Detail</Link> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
}

export default connect(mapStateToProps, { getUser })(App);
