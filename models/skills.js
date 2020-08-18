const skills = [
    {id: 10001, skill: 'JS', done: true},
    {id: 10002, skill: 'Node', done: true},
    {id: 10003, skill: 'Express', done: true},
    {id: 10004, skill: 'MongoDb', done: true},
]

module.exports = {
    getAll,
    getOne,
    createOne,
    deleteOne,
    updateOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function createOne(skill) {
    skill.id = skills[skills.length-1].id+1;
    skill.done = false;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.find(skill => skill.id === id);
    skills.splice(idx,1)
}

function updateOne(id, value) {
    const idx = skills.find(skill => skill.id === id);
    skills.splice(idx,1, value)
}