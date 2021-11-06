// const {validationResult} = require('express-validator');
const { Client } = require('@elastic/elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })

exports.createBloodTest = async (req, res, next) => {
    try {

        console.log(req.body);
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     const error = new Error(errors.array()[0].msg);
        //     error.statusCode = 422;
        //     error.data = errors.array();
        //     throw error;
        // }
    

        client.search({
             index: 'blood_test',
             body: {
                size: 1,
                query: {
                    match: {
                        name: {
                            query: req.body.testName,
                            fuzziness: "AUTO"
                        }
                    }, 
                }
            } 
        })
        .then((results) => {
            if(results.body.hits.hits.length != 0){
                res.status(200).json({
                    message: 'Blood test created successfully!',
                    result: results.body.hits.hits[0],
                    testValue: req.body.testValue
                });
            } else{
                res.status(200).json({
                    message: 'Unknown blood test input.',
                    result: null,
                    testValue: req.body.testValue
                });
            }
            
        })
        .catch((err) => {
            console.log(err);
            res.send([]);
        });

        
    } catch (err) {
       if(!err.statusCode) {
            err.statusCode = 500;
       }
       next(err);
    }
};
