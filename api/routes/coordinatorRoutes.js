const express = require('express');
const router = express.Router();
const coordinatorListController = require('../controllers/coordinatorListController');


router.post('/addNewCoordinator', coordinatorListController.create);

router.delete('/deleteNewCoordinator/:id', coordinatorListController.delete);

router.get('/readNewCoordinator', coordinatorListController.index);

router.post('/editNewCoordinator/:id', coordinatorListController.update);


module.exports = router;