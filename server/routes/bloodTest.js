const express = require('express');
const {body} = require('express-validator');
const bloodTestController = require('../controllers/bloodTestController');
const router = express.Router();


router.post('/blood-test', [
    body('testName')
        .trim()
        .notEmpty()
        .matches(/^[A-Za-z0-9(),-:/!]/)
        .withMessage("Test Name: please enter the following character set: 'A-Z', 'a-z', '0-9' and '(),-:/!'"),
    body('testValue')
        .trim()
        .notEmpty()
        .isNumeric()
        .withMessage("Test Value: please enter only a number"),
], bloodTestController.createBloodTest);

module.exports = router;