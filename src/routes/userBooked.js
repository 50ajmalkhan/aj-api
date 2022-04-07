const express = require('express');
const router = express.Router();
const { bookServies, getAllServices, bookedAll, getuserServices } = require('../controller/userBooked')


router.post('/book/services', bookServies);
router.post('/getAllbook/services', getAllServices);
router.post('/getUserbook/services', getuserServices);
router.post('/bookAll/services', bookedAll);



module.exports = router