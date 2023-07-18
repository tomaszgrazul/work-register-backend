const express = require('express');
const router = express.Router();
const companyListController = require('../controllers/companyListController');


router.post('/addNewCompany', companyListController.create);

router.delete('/deleteNewCompany/:id', companyListController.delete);

router.get('/readNewCompany', companyListController.index);

module.exports = router;