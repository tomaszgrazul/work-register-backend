const express = require('express');
const router = express.Router();
const numberOfAgreementController = require('../controllers/numberOfAgreementController');


router.post('/addNumberOfAgreemnet', numberOfAgreementController.create);

router.delete('/deleteNumberOfAgreemnet/:id', numberOfAgreementController.delete);

router.get('/readNumberOfAgreemnet', numberOfAgreementController.index);

module.exports = router;