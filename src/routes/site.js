const express = require('express');
const router = express.Router();

var siteController = require('../app/controllers/SiteController.js')

//siteController.index
router.get('/', siteController.index);
router.get('/search', siteController.search);

module.exports = router;