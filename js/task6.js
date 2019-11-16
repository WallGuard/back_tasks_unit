const obj = require('./database')
const pick = require('./task1.js')

function catFactory(obj, defaults) {
    let cat = new Object();

    cat = {
        name: pick(obj.name),
        age: pick(obj.age),
        gender: pick(obj.gender),
        legsCount: pick(obj.legsCount),
        tailLength: pick(obj.tailLength)
    }
    for (key in defaults) {
        cat[key] = defaults[key]
    }
    return cat;
}
//console.log(catFactory(obj, {gender: 'Male'}))

module.exports = catFactory
