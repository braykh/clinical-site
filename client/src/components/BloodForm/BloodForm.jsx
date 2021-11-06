import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../helpers/validators';
import { Input } from '../../helpers/form-controls';

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
            <Field component={Input} name={"testName"} validate={[required]} placeholder={"Test name"} label="Test name"/>
            <Field component={Input} name={"testValue"} validate={[required]} placeholder={"Test value"} label="Test value"/>
            {props.error && <div className="">
                <span>{props.error}</span>
            </div>}
            <div className="">
                <button disabled={props.pristine || props.submitting}>Add</button>
            </div>
        </form>
    )
}

const BloodTestReduxForm = reduxForm({
    form: 'bloodTest'
})(Form);

export default BloodForm;
