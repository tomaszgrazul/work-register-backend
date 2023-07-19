const express = require('express');
const router = express.Router();
const principalListController = require('../controllers/principalListController');


router.post('/addNewPrincipal', principalListController.create);

router.delete('/deleteNewPrincipal/:id', principalListController.delete);

router.get('/readNewPrincipal', principalListController.index);

router.post('/editNewPrincipal/:id', principalListController.update);


module.exports = router;