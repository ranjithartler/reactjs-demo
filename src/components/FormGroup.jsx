import React, { Fragment } from 'react';
import { Form, Col, InputGroup } from 'react-bootstrap';

export const FormGroup = props => {

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

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        name,
        type,
        key
    } = props;


    return (
        <Fragment>
            <Form.Control
                key={key}
                type={type}
                name={name}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched[name] && !errors[name]}
                isInvalid={touched[name] && errors[name]}
            />

            <Form.Control.Feedback type="invalid">
                {errors[name]}
            </Form.Control.Feedback>
        </Fragment>
    );
}