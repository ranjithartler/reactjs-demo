import React, { Component, Fragment } from 'react';
import { Form, Col, InputGroup } from 'react-bootstrap';

export const FormGroupClone = props => {

    const {
        label,
        md,
        isInputGroup
    } = props;

    let formFields = '';

    if (isInputGroup) {
        formFields = <CustomInputGroup { ...props } />;
    } else {
        formFields = <FormControl { ...props } />;
    }

    return (
        <Form.Group as={Col} md={md}>
            <Form.Label>{label}</Form.Label>
            {formFields}
        </Form.Group>
    );
}

const CustomInputGroup = props => {

    let prependTo = '';
    let appendTo = '';

    if (props.isPrepend) {
        prependTo = <FormControl { ...props } />;
    } else {
        appendTo = <FormControl { ...props } />
    }

    return (
        <InputGroup>
            {appendTo}
            <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            {prependTo}
        </InputGroup>
    );
}

const FormControl = props => {

    const { field, form, index, type, arrayName } = props;

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
    } = form;

    let name = '';

    if(field.name !== undefined) {
        name = field.name.split('.');
        name = name[2];
    }

    let isInvalidField = false;
    let isValidField = true;
    let errorMsg = '';

    if(errors[arrayName] !== undefined 
        && errors[arrayName][index] !== undefined 
        && touched[arrayName] !== undefined 
        && touched[arrayName][index] !== undefined) {
            
            if(errors[arrayName][index][name]){
                isInvalidField = true;
                errorMsg = errors[arrayName][index][name];
            } else {
                isValidField = false;
            }
    }

    return (
        <Fragment>
            <Form.Control
                { ...field }
                isValid={isValidField}
                isInvalid={isInvalidField}
                autoComplete={false}
            />

            {
                isInvalidField
                ?   <Form.Control.Feedback type="invalid">
                        {errorMsg}
                    </Form.Control.Feedback>
                : null
            }
        </Fragment>
    );
}