const express = require('express');
// const {body} = require('express-validator');
const bloodTestController = require('../controllers/bloodTestController');
const router = express.Router();


router.post('/blood-test', bloodTestController.createBloodTest);

module.exports = router;