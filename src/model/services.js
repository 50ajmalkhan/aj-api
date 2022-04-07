const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

    vendor_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    phone: {
        type: Number,
        require: true
    },
    serviceName: {
        type: String,
        required: true,
        trim: true
    },
    perPersonCharge: {
        type: Number,
        required: true
    },
    venueName: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true
    }


}, { timestamps: true });


module.exports = mongoose.model('Service', serviceSchema);