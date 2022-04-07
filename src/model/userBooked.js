const mongoose = require('mongoose');

const BookedSchema = new mongoose.Schema({

    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    venueName: {
        type: String,
        require: true
    },
    guest: [{
        type: String,

    }],
    totalGuest: {
        type: Number,
        required: true,
        trim: true
    },
    serviceName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        trim: true
    },
    perPerson: {
        type: Number,
    },
    day: {
        type: String,
    },

    others: {
        type: String
    }



}, { timestamps: true });


module.exports = mongoose.model('BookedService', BookedSchema);