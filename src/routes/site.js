const express = require('express');
const router = express.Router();

var siteController = require('../app/controllers/SiteController.js')

//siteController.index
router.get('/', siteController.index);
router.get('/admin', siteController.admin);
router.get('/admin/watch', siteController.adminWatch);
router.get('/admin/users', siteController.adminUsers);
router.get('/sort', siteController.sort);
router.get('/dangnhap', siteController.dangnhap);
router.get('/dangky', siteController.dangky);
router.get('/logout', siteController.logout);

module.exports = router;