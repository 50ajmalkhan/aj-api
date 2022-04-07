const Book = require('../model/userBooked');
const User = require('../model/users')

exports.bookServies = (req, res) => {
    const guest = req.body.guest;
    console.log(req.body)

    const service = {
        user_id: req.body.user_id,
        service_id: req.body.service_id,
        vendor_id: req.body.vendor_id,
        venueName: req.body.venueName,
        serviceName: req.body.selectedValue,
        guest: guest,
        totalGuest: req.body.totalGuest,
        perPerson: req.body.perPerson,
        date: req.body.date,
        day: req.body.day,
        others: req.body.others

    }

    const cat = new Book(service);
    cat.save((error, category) => {
        if (error) { return res.status(400).json({ error }) }
        if (service) {
            return res.status(200).json({ message: "successfullyCreated!" })


        }
    })

};
exports.getAllServices = (req, res) => {
    const vendor_id = req.body.vendor_id
    Book.find({ vendor_id }).populate("user_id")
        .exec((error, service) => {
            if (error) { return res.status(400).json({ error }) }
            if (service) {


                return res.status(200).json({ message: service });
            }
        })

}
exports.getuserServices = (req, res) => {
    const user_id = req.body._id
    Book.find({ user_id }).populate("vendor_id")
        .exec((error, service) => {
            if (error) { return res.status(400).json({ error }) }
            if (service) {


                return res.status(200).json({ message: service });
            }
        })

}
exports.bookedAll = (req, res) => {
    Book.find({}).populate("user_id").populate("vendor_id")
        .exec((error, service) => {
            if (error) { return res.status(400).json({ error }) }
            if (service) {


                return res.status(200).json({ message: service });
            }
        })

}