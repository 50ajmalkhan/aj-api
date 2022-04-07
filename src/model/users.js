const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    bookedService: { type: mongoose.Schema.Types.ObjectId, ref: "BookedService", },
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    phone: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'vendor'],
        default: 'user'
    },
    fullName: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String
    }
}, { timestamps: true });







module.exports = mongoose.model('User', UserSchema);