import React from 'react';
import uuid from 'react-uuid'

const Results = (props) => {
    return (
        <div className="results-list">
            <ul>
                {
                    props.results.map( result => {
                        if(result.result != null){
                            return <li key={uuid()}>{result.result._source.name} - {result.testValue} = {result.testValue > result.result._source.threshold? 'Bad!': 'Good!'}</li>
                        }else{
                            return <li key={uuid()}>Unknown</li>
                        }
                        
                    })
                }
            </ul>
        </div>   
    );
}

export default Results;


