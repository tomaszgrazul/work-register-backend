const express = require('express');
const router = express.Router();
const officeListController = require('../controllers/officeListController');


router.post('/addNewOfficeName', officeListController.create);

router.delete('/deleteNewOfficeName/:id', officeListController.delete);

router.get('/readNewOfficeName', officeListController.index);

module.exports = router;