const obj = require('./database')
const catsGroupGenerate = require('./task3.js')
const list = catsGroupGenerate(999);

function catsGroupGenerate_Gender(list) {
 /*   let listOfCats = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].gender === 'Male') {
            listOfCats.push(list[i]);
        }
    }
    return listOfCats;
*/
return list.filter(cat => cat.gender === 'Male');
}
//console.log(catsGroupGenerate_Gender(list))

function catsGroupGenerate_Name(list) {
/*    let listOfCatsName = [];
    for (let i = 0; i < list.length; i++) {
        listOfCatsName.push(list[i].name);
    }
    return listOfCatsName;
*/
return list.map(cat => cat.name);
}
//console.log(catsGroupGenerate_Name(list))

function catsGroupGenerate_Old(list, maxCount) {
    let listOfCats = [];
    let oldCat = obj.age[0];

    for (let i = 0; i < list.length; i++) {
        if ((list[i].gender === 'Male') && (list[i].age > oldCat)) {
            oldCat = list[i].age;
        }
    }

    for (let i = 0; i < list.length; i++) {
        if ((list[i].gender === 'Male') && (list[i].age === oldCat)) {
            listOfCats.push(list[i]);
            if (listOfCats.length > maxCount) {
                break;
            }
        }
    }

    return listOfCats;
}
//console.log(catsGroupGenerate_Old(list, 10))


function catsGroupGenerate_Young(list, maxCount) {
    let listOfCats = [];
    let youngCat = obj.age.length;

    for (let i = 0; i < list.length; i++) {
        if ((list[i].gender === 'Female') && list[i].age < youngCat) {
            youngCat = list[i].age;
        }
    }

    for (let i = 0; i < list.length; i++) {
        if ((list[i].gender === 'Female') && list[i].age === youngCat) {
            listOfCats.push(list[i]);
            if (listOfCats.length >= maxCount) {
                break;
            }
        }
    }

    return listOfCats;
}
//console.log(catsGroupGenerate_Young(list, 10))

module.exports = {
    catsGroupGenerate_Gender,
    catsGroupGenerate_Name,
    catsGroupGenerate_Old,
    catsGroupGenerate_Young
}
