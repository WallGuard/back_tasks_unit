const obj = require('./database')
const catFactory = require('./task2.js')

function catsGroupGenerate(n) {
    let listOfCats = [];
    for (let i = 0; i < n; i++) {
        listOfCats.push(catFactory(obj));
    }
    return listOfCats;
}
//console.log(catsGroupGenerate(-3))

module.exports = catsGroupGenerate
