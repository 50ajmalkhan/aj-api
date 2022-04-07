const express = require('express');
const router = express.Router();

const { validateSignUpRequest, validateSignInRequest, isRequestValidated } = require("../validators/auth");
const { signup, signin, updateUser } = require('../controller/user')


router.post('/signup', validateSignUpRequest, isRequestValidated, signup);
router.post('/signin', validateSignInRequest, isRequestValidated, signin);
router.post('/update', validateSignInRequest, isRequestValidated, updateUser);



module.exports = router