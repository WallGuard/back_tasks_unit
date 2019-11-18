const obj = require('./js/database')
const pick = require('./js/task1')
const catFactory = require('./js/task2')
const catsGroupGenerate = require('./js/task3')
const nameStat = require('./js/task5')
const catFactory_2 = require('./js/task6')
var assert = require('assert')
require('babel-register')

const test_db = {
    name: ['name_1', 'name_2', 'name_3', 'name_4', 'name_5'],
    age: [1, 2, 3, 4, 5],
    gender: ['Male', 'Female'],
    legsCount: [1, 2, 3, 4, 5],
    tailLength: [1, 2, 3, 4, 5]
};

test_list = [
    {gender: 'Male', age: 12},
    {name: 'Natali', gender: 'Female', age: 8},
    {gender: 'Male', age: 13},
    {gender: 'Male', age: 8},
    {name: 'Kate', gender: 'Female', age: 8}
];

function task1_test(arr) {
    if (arr.indexOf(pick(arr)) !== -1) { return true }
    else {return false}
}

function task2_test(arr, catVar) {
    if (arr.indexOf(catVar) !== -1) {
        return true
    }
}

describe('pick', () => {
    it('pick возвращает рандомный элемент из тестового массива', () => {
        assert.equal(task1_test(test_db.name), true, 'error');
    })
})

describe('catFactory', () => {
    const catFac = catFactory(test_db)

    it('catFactory возвращает объект с кошачьими свойствами', () => {
        assert.equal(task2_test(test_db.name, catFac.name), true), 'error name';
        assert.equal(task2_test(test_db.age, catFac.age), true, 'error age');
        assert.equal(task2_test(test_db.gender, catFac.gender), true, 'error gender');
        assert.equal(task2_test(test_db.legsCount, catFac.legsCount), true, 'error legs');
        assert.equal(task2_test(test_db.tailLength, catFac.tailLength), true, 'error tail');
    })
})

describe('catsGroupGenerate', () => {
    it('catsGroupGenerate возвращает массивный кошатник', () => {
        function task3_test(number) {
            if (catsGroupGenerate(number).length === number) {
                return true
            }
        }
        assert.equal(task3_test(999), true);
    })
})

describe('catsGroupGenerate_Gender', () => {
    it('catsGroupGenerate_gender однополых котов', () => {

        function task4_test1() {
            return catsGroupGenerate_Gender(test_list).length
        }

        assert.equal(task4_test1(), 3);
    })
})

describe('catsGroupGenerate_Name', () => {
    it('catsGroupGenerate_Name возвращает список имен', () => {

        function task4_test2() {
            return catsGroupGenerate_Name(test_list).length
        }

        assert.equal(task4_test2(), 5);
    })
})

describe('catsGroupGenerate_Old', () => {
    it('catsGroupGenerate_Old возвращает облезлых кошаков', () => {

        function task4_test3() {
            return catsGroupGenerate_Old(test_list, 3).length
        }

        assert.equal(task4_test3(), 1);
    })
})

describe('catsGroupGenerate_Young', () => {
    it('catsGroupGenerate_Young возвращает молодых кошаков', () => {
        function task4_test4() {
            return catsGroupGenerate_Young(test_list, 3).length
        }

        assert.equal(task4_test4(), 2);
    })
})

describe('nameStat', () => {
    let cats =[{name: 'name_1'}, {name: 'name_1'}, {name: 'name_1'}] 
    it('nameStat возвращает список по кол-ву имен', () => {
        function task5_test() {
            return Object.values(nameStat(cats))
        }
        
        assert.equal(task5_test(cats), 3);
    })
})

describe('catFactory_2', () => {
    /*
    function task6_test(defaults) {
        let a = Object.entries(catFactory_2(test_db, defaults));
        let b = Object.entries(defaults);

        if ((a.indexOf(b)) === 1) {
            return true
        }
        console.log(Object.entries(catFactory_2(test_db, defaults)))
        console.log(Object.entries(defaults)[0])
        console.log(catFactory_2(test_db, defaults))
    }
    */

    function task6_test(defaults) {
        return catFactory_2(test_db, defaults).gender === defaults.gender
    }

    it('catFactory-M тож самое что и catFactory только с ключом ', () => {
        assert.equal(task6_test({gender: 'Male'}), true), 'error gender';
        assert.equal(task6_test({gender: 'Male'}), true), 'error gender';
        assert.equal(task6_test({gender: 'Male'}), true), 'error gender';
    })
})






function catsGroupGenerate_Gender(list) {
    let listOfCats = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].gender === 'Male') {
            listOfCats.push(list[i]);
        }
    }
    return listOfCats;
}

function catsGroupGenerate_Name(list) {
    let listOfCatsName = [];
    for (let i = 0; i < list.length; i++) {
        listOfCatsName.push(list[i].name);
    }
    return listOfCatsName;
}

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
