import React from 'react';
import uuid from 'react-uuid'
import style from './BloodResults.module.css';

const Results = (props) => {
    return (
        <div className={style.resultsList}>
            <ul>
                {
                    props.results.map( result => {
                        if(result.result != null){
                            return <li key={uuid()} className={result.testValue > result.result._source.threshold? style.badResult: style.goodResult }>{result.result._source.name} - {result.testValue} = {result.testValue > result.result._source.threshold? 'Bad!': 'Good!' }</li>
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


