const express = require('express');
const router = express.Router();
const teamListController = require('../controllers/teamListController');


router.post('/addTeamMember', teamListController.create);

router.delete('/deleteTeamMember/:id', teamListController.delete);

router.get('/readTeamMember', teamListController.index);

module.exports = router;