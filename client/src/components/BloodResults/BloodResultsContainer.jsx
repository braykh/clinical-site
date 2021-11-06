import React from 'react';
import { connect } from 'react-redux';
import BloodResults from './BloodResults';

class BloodResultsContainer extends React.Component {
    render() {
        return (
            <>
                <BloodResults results={this.props.results}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.bloodTest.results,
    }
}

const mapDispatchToPropsObject =  {}

export default connect(mapStateToProps, mapDispatchToPropsObject)(BloodResultsContainer);


