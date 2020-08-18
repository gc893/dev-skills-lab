const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills')


/* GET users listing. */
router.get('/', skillsCtrl.showAllSkills);
router.get('/new', skillsCtrl.newSkill);
router.get('/:id', skillsCtrl.showSkills)
router.post('/', skillsCtrl.createSkill);

module.exports = router;
