const express = require('express');
const router = express.Router();
const numberOfAgreementController = require('../controllers/numberOfAgreementController');


router.post('/create', numberOfAgreementController.create);

router.delete('/delete/:id', numberOfAgreementController.delete);

router.get('/index', numberOfAgreementController.index);

module.exports = router;