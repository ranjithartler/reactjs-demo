import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../services/user';

class UserDetail extends Component {

    componentDidMount() {
        console.log(this.props, "User detail");
    }

    render() { 
        return (
            <div>
                User detail
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {users: state.users};
}

export default connect(mapStateToProps, {getUser} )(UserDetail);