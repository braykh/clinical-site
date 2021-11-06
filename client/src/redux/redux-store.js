import {createStore, combineReducers, applyMiddleware} from 'redux';
import bloodTestReducer from './blood-test-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    bloodTest: bloodTestReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;