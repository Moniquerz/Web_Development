const express = require('express');
const router = express.Router();

const {updateBookPage} = require('../controllers/updateControllers');

router.get('/', updateBookPage);

module.exports = router