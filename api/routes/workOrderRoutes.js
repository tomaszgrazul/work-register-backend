const express = require('express');
const router = express.Router();
const workOrderListController = require('../controllers/workOrderListController');


router.post('/addWorkOrder', workOrderListController.create);

router.delete('/deleteWorkOrder/:id', workOrderListController.delete);

router.get('/readWorkOrder', workOrderListController.index);

router.post('/editWorkOrder/:id', workOrderListController.update);


module.exports = router;