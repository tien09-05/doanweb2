const express = require('express');
const router = express.Router();

var newsController = require('../app/controllers/NewsController.js')

//newsController.index

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;