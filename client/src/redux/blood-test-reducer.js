
import {reset, SubmissionError} from 'redux-form';
import {bloodTestAPI} from '../api/api';

const ADD_BLOOD_TEST_DATA = 'blood-test/ADD-BLOOD-TEST-DATA';

let initialState = {
    results: []
}

const bloodTestReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_BLOOD_TEST_DATA: {
            return{
                ...state,
                results: [
                    ...state.results, {
                        testValue: action.newResult.testValue,
                        result: action.newResult.result
                    }
                ]
            }
        }
        default: 
            return state;
    }
};

const addBloodTestDataActionCreator = (newResult) => {
    return {'type': ADD_BLOOD_TEST_DATA, newResult};
};

export const addBloodTestThunkCreator = (bloodData) => { 
    return (dispatch) => {
        return bloodTestAPI.addBloodTestApi(bloodData).then(data => {
            if (data) {
                console.log(data)
                dispatch(addBloodTestDataActionCreator(data));
                dispatch(reset('bloodTest')); 
            }
        })
        .catch((error) => {
            console.log('An error occurred:', error);
            throw new SubmissionError({_error: error.response.data.message});
        });
    }
}

export default bloodTestReducer;