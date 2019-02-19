import React, { Component, Fragment } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUser } from '../services/user';

class AsyncAutocomplete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            multiple: true,
            options: [],
            selectedUsers: []
        }
    }

    _handleSearch = (query) => {
        this.setState({
            isLoading: true
        });
        // console.log("HANDLE SEARCH", this.state.getUser());
        console.log(this.props.getUser(), "_handleSearch");
        const options = this.props.options;
        console.log(this.props.options , "THIS PROPS");
        console.log(this.state , "THIS PROPS");
        
        this.setState({
                isLoading: false,
                options
            });
            
            // fetch(`https://api.github.com/search/users?q=${query}+in:login&page=1&per_page=40`)
            // .then(resp => resp.json())
            // .then(({items, total_count}) => {
                //     console.log(items);
                //     const options = items.map((i) => ({                                                                 
                    //             id: i.id,
                    //             label: i.login,
        //         }));
        //         this.setState({
        //             isLoading: false,
        //             options
        //         });
        //     })

    }

    render() {
        return (
            <AsyncTypeahead
                {...this.state}
                minLength={3}
                onSearch={query => this._handleSearch(query)}
                options={this.props.options}
                placeholder="Search for users"
            />
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state, "state");
    const options = state.users.map((user) => ({                                                                 
        id: user.id,
        label: user.title,
    }));
    debugger;

    return {options}
}

export default connect(mapStateToProps, { getUser })(AsyncAutocomplete);