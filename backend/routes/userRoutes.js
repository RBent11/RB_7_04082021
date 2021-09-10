const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrl');
const validePassword = require('../middleware/validePassword');

router.post('/signup', validePassword, userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/deleteUser', userCtrl.deleteUser);

module.exports = router;

