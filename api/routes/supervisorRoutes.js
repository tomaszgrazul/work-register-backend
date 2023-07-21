const express = require('express');
const router = express.Router();
const supervisorListController = require('../controllers/supervisorListController');


router.post('/addNewSupervisor', supervisorListController.create);

router.delete('/deleteNewSupervisor/:id', supervisorListController.delete);

router.get('/readNewSupervisor', supervisorListController.index);

router.post('/editNewSupervisor/:id', supervisorListController.update);


module.exports = router;