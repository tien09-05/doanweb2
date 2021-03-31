const express = require('express');
const router = express.Router();

var userController = require('../app/controllers/UserController.js')

//userController.index
router.get('/', userController.index);
// router.get('/add', userController.add);

// dang ky
router.post('/save', userController.save);
// dang nhap
router.post('/handledangnhap', userController.handledangnhap);

// router.get('/edit/:id', userController.edit);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;