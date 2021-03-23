const express = require('express');
const router = express.Router();

var siteController = require('../app/controllers/SiteController.js')

//siteController.index
router.get('/', siteController.index);
router.get('/admin', siteController.admin);

router.get('/add', siteController.add);
router.post('/save', siteController.save);
router.get('/edit/:id', siteController.edit);
router.put('/:id', siteController.update);
router.delete('/:id', siteController.delete);
router.get('/sort', siteController.sort);

module.exports = router;