const express = require('express');
const router = express.Router();
const {getAllBooks} = require('../controllers/readControllers');

router.get('/', getAllBooks);

module.exports = router