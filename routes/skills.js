const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills')


/* GET users listing. */
router.get('/', skillsCtrl.showAllSkills);
router.get('/new', skillsCtrl.newSkill);
router.get('/:id', skillsCtrl.showSkill)
router.get('/:id/edit', skillsCtrl.editSkill)
router.put('/:id', skillsCtrl.updateSkill);
router.post('/', skillsCtrl.createSkill);
router.delete('/:id', skillsCtrl.deleteSkill);

module.exports = router;
