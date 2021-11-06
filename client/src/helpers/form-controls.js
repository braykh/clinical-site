import React from 'react';

const FormControl = ({input, meta, label, ...props}) => {
    const hasError = meta.touched && meta.error; 
    return (
        <div className={`'formField' ${ hasError ? 'error': ''}`}>
            <label>{label}</label>
            {props.children}
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, label, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}