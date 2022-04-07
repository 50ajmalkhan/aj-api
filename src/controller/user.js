const User = require('../model/users');
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();

exports.signup = (req, res) => {



    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) {
                return res.status(200).json({ message: "User Already Registered" });
            }
            const { firstName, lastName, email, password, role, phone } = req.body;
            const fullName = firstName + ' ' + lastName;
            const _user = new User({ firstName, lastName, role, email, password, phone, fullName });
            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({ error });
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
                if (user.password === req.body.password && user.role === "admin") {
                    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role, fullName, password, phone } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName, password, phone
                        }

                    })
                }
                else if (user.password === req.body.password && user.role === "user") {
                    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role, fullName, password, phone } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName, password, phone
                        }

                    })
                }
                else if (user.password === req.body.password && user.role === "vendor") {
                    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
                    const { _id, firstName, lastName, email, role, fullName, password, phone } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id, firstName, lastName, email, role, fullName, password, phone
                        }

                    })
                }
                else {
                    return res.status(500).json({
                        message: "Invalid Passowrd"
                    })
                }

            }
            else {
                return res.status(500).json({ message: "Password and Email does not match" })
            }
        }
        );
}
exports.updateUser = (req, res) => {
    const { _id, email, password, updatedPhone, firstName, lastName } = req.body;
    const condition = { "_id": _id };
    const fullName = firstName + " " + lastName;
    const update = {
        "$set":

        {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phone: updatedPhone,
            fullName: fullName
        },


    };
    User.findOneAndUpdate(condition, update, { new: true })

        .exec((error, _users) => {
            if (error) { return res.status(400).json({ error }) }
            if (_users) {
                return res.status(201).json({ users: "updates Successfully" })
            }
        })



};


