import React from 'react';
import BloodForm from './BloodForm';
import {addBloodTestThunkCreator} from '../../redux/blood-test-reducer';
import {connect} from 'react-redux';

class BloodFormContainer extends React.Component {
    render() {
        return (
            <>
                <BloodForm addBloodTest={this.props.addBloodTestThunkCreator} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToPropsObject = {
    addBloodTestThunkCreator
}

export default connect(mapStateToProps, mapDispatchToPropsObject)(BloodFormContainer);


