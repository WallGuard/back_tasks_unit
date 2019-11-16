const obj = require('./database')
const pick = require('./task1.js');

function catFactory(obj) {
    let cat = new Object();

    cat = {
        name: pick(obj.name),
        age: pick(obj.age),
        gender: pick(obj.gender),
        legsCount: pick(obj.legsCount),
        tailLength: pick(obj.tailLength)
    }
    return cat;
}
module.exports = catFactory

//console.log(catFactory(obj))
