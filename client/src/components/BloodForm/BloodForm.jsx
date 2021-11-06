import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, validateText, validateNumber } from '../../helpers/validators';
import { Input } from '../../helpers/Form/form-controls';
import style from './BloodForm.module.css';

function BloodForm(props) {

    let addNewComments = (bloodTestData) => {
        if(bloodTestData.testName.length > 0 && bloodTestData.testValue.length > 0){
            return new Promise( (resolve) =>{
                resolve(props.addBloodTest(bloodTestData));
            });
        }
    };

    return (
        <div className="">
           <BloodTestReduxForm onSubmit={addNewComments} /> 
        </div>
    );
}

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input} name={"testName"} validate={[required, validateText]} placeholder={"Test name"} label="Test name"/>
            <Field component={Input} name={"testValue"} validate={[required, validateNumber]} placeholder={"Test value"} label="Test value"/>
            {props.error && <div className={style.formError}>
                <span>{props.error}</span>
            </div>}
            <div className={style.buttonWrap}>
                <button disabled={props.pristine || props.submitting}>Add</button>
            </div>
        </form>
    )
}

const BloodTestReduxForm = reduxForm({
    form: 'bloodTest'
})(Form);

export default BloodForm;
