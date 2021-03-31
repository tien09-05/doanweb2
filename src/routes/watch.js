const express = require('express');
const router = express.Router();

var watchController = require('../app/controllers/WatchController.js')

//watchController.index
router.get('/', watchController.index);
router.get('/add', watchController.add);
router.post('/save', watchController.save);
router.get('/edit/:id', watchController.edit);
router.put('/:id', watchController.update);
router.delete('/:id', watchController.delete);
module.exports = router;