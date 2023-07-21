const express = require('express');
const router = express.Router();
const allowerListController = require('../controllers/allowerListController');


router.post('/addNewAllower', allowerListController.create);

router.delete('/deleteNewAllower/:id', allowerListController.delete);

router.get('/readNewAllower', allowerListController.index);

router.post('/editNewAllower/:id', allowerListController.update);


module.exports = router;