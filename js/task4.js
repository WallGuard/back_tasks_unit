const obj = require('./database')
const catsGroupGenerate = require('./task3.js')
const list = catsGroupGenerate(999);

function catsGroupGenerate_Gender(list) {
    let listOfCats = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].gender === 'Male') {
            listOfCats.push(list[i]);
        }
    }
    return listOfCats;
}
//console.log(catsGroupGenerate_Gender(list))

function catsGroupGenerate_Name(list) {
    let listOfCatsName = [];
    for (let i = 0; i < list.length; i++) {
        listOfCatsName.push(list[i].name);
    }
    return listOfCatsName;
}
//console.log(catsGroupGenerate_Name(list))

function catsGroupGenerate_Old(list, maxCount) {
    let listOfCats = [];
    let oldCat = obj.age[0];
    // 1. выявить самый высокий age
    // 2. выявить котов с таким же age

    for (let i = 0; i < list.length; i++) {
        if ((list[i].gender === 'Male') && (list[i].age > oldCat)) {
            oldCat = list[i].age;
        }
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i].age === oldCat) {
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
        if (list[i].age < youngCat) {
            youngCat = list[i].age;
        }
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i].age === youngCat) {
            listOfCats.push(list[i]);
            if (listOfCats.length >= maxCount) {
                break;
            }
        }
    }

    return listOfCats;
}
//console.log(catsGroupGenerate_Young(list, 10))
