const express = require('express');
const router = express.Router();
const managerListController = require('../controllers/managerListController');


router.post('/addNewManager', managerListController.create);

router.delete('/deleteNewManager/:id', managerListController.delete);

router.get('/readNewManager', managerListController.index);

router.post('/editNewManager/:id', managerListController.update);


module.exports = router;