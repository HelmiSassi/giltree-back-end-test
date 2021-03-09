const express = require('express');
const router = express.Router();
var verifyCheckDuplicate = require('../middleware/verifyChekDuplicate');
var userController = require('../controllers/user.controllers');

router.post('/register',[verifyCheckDuplicate], userController.register);
router.post('/login', userController.login);

module.exports = router;