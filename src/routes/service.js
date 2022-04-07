const express = require('express');
const router = express.Router();
const { addServices, getServices, getAllServices, getAll } = require('../controller/services')


router.post('/service/create', addServices);
router.post('/service/get', getServices);
router.post('/service/getAll', getAllServices);
router.post('/service/getAllServices', getAll);


module.exports = router;
