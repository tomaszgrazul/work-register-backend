const express = require('express');
const router = express.Router();
const coordinatingListController = require('../controllers/coordinatingListController');


router.post('/addNewCoordinating', coordinatingListController.create);

router.delete('/deleteNewCoordinating/:id', coordinatingListController.delete);

router.get('/readNewCoordinating', coordinatingListController.index);

router.post('/editNewCoordinating/:id', coordinatingListController.update);


module.exports = router;