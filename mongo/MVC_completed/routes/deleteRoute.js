const express = require('express');

//express has a constructor called Router and this will give us access to it 
const router = express.Router();

//importing our delete page
const {displayDeletePage} = require('../controllers/deleteControllers');

//understand that the root route here is actually the current route, /delete
router.get('/', displayDeletePage)

module.exports = router