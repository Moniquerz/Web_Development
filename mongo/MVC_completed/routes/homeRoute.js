const express = require('express');
const router = express.Router();

const {displayHomePage} = require('../controllers/homeControllers');

router.get('/', displayHomePage);

module.exports = router