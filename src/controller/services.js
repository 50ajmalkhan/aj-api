const services = require('../model/services');
const Services = require('../model/services');

exports.addServices = (req, res) => {
    const service = {
        vendor_id: req.body.vendor_id,
        phone: req.body.phone,
        serviceName: req.body.serviceName,
        perPersonCharge: req.body.perPersonCharge,
        address: req.body.address,
        venueName: req.body.venueName
    }

    const cat = new Services(service);
    cat.save((error, category) => {
        if (error) { return res.status(400).json({ error }) }
        if (service) {

            return res.status(200).json({ message: "successfullyCreated!" })


        }
    })

};
exports.getServices = (req, res) => {
    const vendor_id = req.body.vendor_id
    Services.find({ vendor_id })
        .exec((error, service) => {
            if (error) { return res.status(400).json({ error }) }
            if (service) {


                return res.status(200).json({ message: service });
            }
        })

}
exports.getAllServices = (req, res) => {

    Services.find({})
        .exec((error, service) => {
            if (error) { return res.status(400).json({ error }) }
            if (service) {


                return res.status(200).json({ message: service });
            }
        })

}
exports.getAll = (req, res) => {

    Services.find({}).populate("vendor_id")
        .exec((error, service) => {
            if (error) { return res.status(400).json({ error }) }
            if (service) {


                return res.status(200).json({ message: service });
            }
        })

}