const express = require('express');
const router = express.Router();


const {displayCreatePage, createBook} = require('../controllers/createControllers');

router.get('/', displayCreatePage);
router.post('/book', createBook);

module.exports = router