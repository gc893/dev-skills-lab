const Skills = require('../models/skills');

module.exports = {
    showAllSkills,
    newSkill,
    createSkill,
    showSkill,
    editSkill,
    updateSkill,
    deleteSkill
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

  function showSkill(req, res, next) {
    console.log(Skills.getOne(req.params.id))
    res.render('skills/show', {
          skill: Skills.getOne(req.params.id)
        });
  }

  function editSkill(req, res, next) {
    const value = Skills.getOne(req.params.id)
    res.render('skills/edit', {
      skill: value,
      title: 'Developer Skills'});
  }
  
  function updateSkill(req, res, next) {
    req.body.id = req.params.id;
    req.body.done = false;
    Skills.updateOne(req.params.id, req.body);
    res.redirect('/skills');
  }

  function deleteSkill(req, res, next) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
  }