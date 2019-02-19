import React, { Component, Fragment } from 'react';
import {Typeahead } from 'react-bootstrap-typeahead';
import { Form } from 'react-bootstrap';

class Autocomplete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            multiple: true,
            options: ['A', 'B', 'C'],
            selectedUsers: []
        }
    }
    
    render() {
    const {multiple, options } = this.state;

    return (
        <Fragment>
        <Typeahead
            labelKey="name"
            multiple={true}
            options={options}
            placeholder="Choose a state..."
        />
        <Form.Group>
            <Form.Control
            checked={multiple}
            onChange={(e) => this.setState({multiple: e.target.checked})}
            type="checkbox">
            Multi-Select
            </Form.Control>
        </Form.Group>
        </Fragment>
    );
    }
}
 
export default Autocomplete;