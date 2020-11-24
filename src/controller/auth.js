const User = require('../model/users');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();

exports.signup = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) {
                return res.status(200).json({ message: "User Already Registered" });
            }
            const { firstName, lastName, email, password } = req.body;
            const _user = new User({ firstName, lastName, email, password, userName: Math.random().toString() });
            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({ message: "someThing Went Wrong" });
                }
                if (data) {
                    return res.status(201).json({ message: "User Created Successfully..!" })
                }
            });
        })
};

exports.signin = (req, res) => {
    console.log("ajmal")
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) { res.status(500).json({ message: error }) }
            if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role, fullName } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName
                        }

                    })
                } else {
                    return res.status(500).json({
                        message: "Invalid Passowrd"
                    })
                }

            }
            else {
                return res.status(500).json({ message: "Password and Email does not match" })
            }
        }
        )

}
