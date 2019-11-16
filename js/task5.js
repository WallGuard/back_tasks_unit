const catsGroupGenerate = require('./task3')
const list = catsGroupGenerate(99);

function nameStat(list) {
    let catName = {};
    for (let i = 0; i < list.length; i++) {
        let name = list[i].name;
        if (catName.hasOwnProperty(name)) {
            catName[name] += 1;
        }
        else {
            catName[name] = 1;
        }
    }
    return catName;
}
//console.log(nameStat(list))

module.exports = nameStat