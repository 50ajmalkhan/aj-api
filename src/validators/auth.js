const { check, validationResult } = require('express-validator');

exports.validateSignUpRequest = [
    check('firstName')
        .notEmpty()
        .withMessage('FirstName is required'),
    check('lastName')
        .notEmpty()
        .withMessage('LasttName is required'),
    check('email')
        .isEmail()
        .withMessage('Valid Email is Required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password Must be Atleast 6 character Long'),
];
exports.validateSignInRequest = [
    check('email')
        .isEmail()
        .withMessage('Valid Email is Required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password Must be Atleast 6 character Long'),
];
exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(600).json({ error: errors.array()[0].msg })
    }
    next();
}