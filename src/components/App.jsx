import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserForm from './UserForm';
import { getUser } from '../services/user';

class App extends Component {

  componentDidMount() {
    console.log(this.props.getUser(), "componentDidMount");
  }

  render() {
    return (
      <div>
          <UserForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger
  console.log(state, "MAPSTATETOPROPS");
  return { users: state.users };
}

export default connect(mapStateToProps, { getUser })(App);
