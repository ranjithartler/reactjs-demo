import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, FieldArray, Field } from 'formik';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';
import * as Yup from 'yup';
import { BrowserRouter, Redirect, withRouter} from 'react-router-dom';

import { FormGroup } from './FormGroup';
import { FormGroupClone } from './FormGroupClone';
import { createUser } from '../services/user';


class UserForm extends Component {

    handleValidation = () => {
        return Yup.object().shape({
            firstName: Yup.string()
            .min(2, "First name is longer than that")
            .required('First name is required.'),
    
            lastName: Yup.string()
            .min(2, "Last name is longer than that")
            .required('Last name is required.'),
            
            username: Yup.string()
            .min(2, "Username is longer than that")
            .required('Username is required!'),

            emails:Yup.array().of(
                Yup.object().shape({
                    email:Yup.string()
                    .email('Enter valid email')
                    .required('Email is required')
                })
            )
        });
    }

    handleSubmit = (values, props) => {
        debugger
        this.props.createUser(values).then(()=> {
            this.props.history.push('/user-detail');
        });
    }

    render() {
        return (
            <Formik
                validationSchema = { this.handleValidation }
                onSubmit = { this.handleSubmit }
                displayName = 'userForm'
                component = { this.form }
                initialValues={{ emails: [
                    {email: 'jared@gmail.com'}, 
                    {email: 'ian@gmail.com'},
                    {email: 'brent@gmail.com'}
                ] }}
            />
        );
    }

    form = (props) => {
        const { values } = props;
        const { isValid } = props;
        let disabled = true;

        if(isValid) {
            disabled = false;
        }

        return (
            <Form onSubmit={props.handleSubmit}>
                <FormGroup { ...props }
                    name='firstName'
                    label='First Name'
                    type='text'
                    md='4'
                />

                <FormGroup { ...props }  
                    name='lastName'
                    label='Last Name'
                    type='text'
                    md='4'
                />

                <FormGroup { ...props }
                    name='username'
                    label='Username'
                    type='text'
                    md='4'
                />

                <FieldArray 
                    name="emails"
                    render={ (arrayHelpers) => (
                        <div>
                            {values.emails && values.emails.length > 0 ? (
                                values.emails.map((email, index) => (
                                <React.Fragment key={index}>
                                    <Field name={`emails.${index}.email`}
                                        render={(innerProps) => (
                                        // <CloneElemet {...innerProps} arrayName={arrayHelpers.name}
                                        //     title="First Name" index={index}/>
                                        <FormGroupClone { ...innerProps }
                                            label='Email'
                                            type='email'
                                            md='4'
                                            index={index}
                                            arrayName={arrayHelpers.name}
                                        />
                                    )}  />
                                </React.Fragment>
                                ))
                            ) : null}
                        </div>
                    )}
                />

                <Button type="submit" disabled={disabled} >Submit form</Button>
                <Button type="button" onClick={this.addElement} >Add</Button>
                <Button type="button" onClick={this.removeElement} >Remove</Button>
            </Form>
        );
    }

    addElement = () => {
        console.log(this.props, "ADD ELEMENT");
        return(<input></input>);
    }

    removeElement = () => {
        console.log(this.props, "REMOVE ELEMENT");
    }
}

// const CloneElemet = ({ title, field, form, index, arrayName }) => (
//     <label htmlFor={field.name}>
//         <label>{title}</label>
//         <input type="email" {...field}/>
//         {
//             form.errors[arrayName] !== undefined
//             && form.errors[arrayName][index] !== undefined
//             && form.touched[arrayName] !== undefined
//             && form.touched[arrayName][index] !== undefined
//             ? <span className="error" >{form.errors[arrayName][index].email}</span>
//             : null
//         }
//     </label>
// );



export default withRouter(connect(null, { createUser })(UserForm));