const express = require('express');
const router = express.Router();
const companyListController = require('../controllers/companyListController');


router.post('/create', companyListController.create);

router.delete('/delete/:id', companyListController.delete);

router.get('/index', companyListController.index);

module.exports = router;