import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label:PropTypes.string,
    disable: PropTypes.bool,
};

function InputField(props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {form,name,label,disable} = props;

    return (
        <input {...register("title", { required: true },name)} />
    );
}

export default InputField;