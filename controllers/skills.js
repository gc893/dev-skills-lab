const Skills = require('../models/skills');

module.exports = {
    showAllSkills,
    newSkill,
    createSkill,
    showSkills
}

function showAllSkills(req, res, next) {
    res.render('skills/index', { 
        skills: Skills.getAll(),
        title: 'Developer Skills'
    });
  }

  function newSkill(req, res, next) {
    res.render('skills/new', { title: 'Developer Skills'});
  }
  
  function createSkill(req, res, next) {
    Skills.createOne(req.body);
    res.redirect('/skills');
  }

  function showSkills(req, res, next) {
    console.log(Skills.getOne(req.params.id))
    res.render('skills/show', {
          skill: Skills.getOne(req.params.id)
        });
  }