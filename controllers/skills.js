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
          skill: Skills.getOne(req.params.id),
          title: 'Developer Skills'
        });
  }

  function editSkill(req, res, next) {
    res.render('skills/edit', {
      skill: Skills.getOne(req.params.id),
      title: 'Developer Skills'});
  }
  
  function updateSkill(req, res, next) {
    req.body.id = parseInt(req.params.id);
    req.body.done = false;
    console.log('body', req.body);
    Skills.updateOne(req.params.id, req.body);
    console.log(Skills.getOne(req.params.id))
    res.redirect('/skills');
  }

  function deleteSkill(req, res, next) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
  }