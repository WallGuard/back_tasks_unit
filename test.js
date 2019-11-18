const obj = require('./js/database')
const pick = require('./js/task1')
const catFactory = require('./js/task2')
const catsGroupGenerate = require('./js/task3')
const cgg = require('./js/task4')
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
}

function task2_test(arr, catVar) {
    if (arr.indexOf(catVar !== 1)) {
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

    it('catFactory should return obj with default props', () => {
        assert.equal(task2_test(test_db.name, catFac.name), true);
        assert.equal(task2_test(test_db.name, catFac.age), true);
        assert.equal(task2_test(test_db.name, catFac.gender), true);
        assert.equal(task2_test(test_db.name, catFac.legsCount), true);
        assert.equal(task2_test(test_db.name, catFac.tailLength), true);
    })
})

describe('catsGroupGenerate', () => {
    it('catsGroupGenerate should return arr of objects', () => {
        function task3_test(number) {
            if (catsGroupGenerate(number).length === number) {
                return true
            }
        }
        assert.equal(task3_test(999), true);
    })
})

describe('catsGroupGenerate_Gender', () => {
    it('catsGroupGenerate_gender should return arr of cat', () => {

        function catsGroupGenerate_Gender(list) {
            let listOfCats = [];
            for (let i = 0; i < list.length; i++) {
                if (list[i].gender === 'Male') {
                    listOfCats.push(list[i]);
                }
            }
            return listOfCats;
        }
        function task4_test1() {
            return catsGroupGenerate_Gender(test_list).length
        }

        assert.equal(task4_test1(), 3);
    })
})

describe('catsGroupGenerate_Name', () => {
    it('catsGroupGenerate_Name should return arr of cat"s name', () => {
        function catsGroupGenerate_Name(list) {
            let listOfCatsName = [];
            for (let i = 0; i < list.length; i++) {
                listOfCatsName.push(list[i].name);
            }
            return listOfCatsName;
        }

        function task4_test2() {
            return catsGroupGenerate_Name(test_list).length
        }
        assert.equal(task4_test2(), 5);
    })
})

describe('catsGroupGenerate_Old', () => {
    it('catsGroupGenerate_Old should return arr of the eldest cat', () => {

        function catsGroupGenerate_Old(list, maxCount) {
            let listOfCats = [];
            let oldCat = obj.age[0];
        
            for (let i = 0; i < list.length; i++) {
                if ((list[i].gender === 'Male') && (list[i].age > oldCat)) {
                    oldCat = list[i].age;
                }
            }

        function task4_test3() {
            return catsGroupGenerate_Old(test_list, 3).length
        }
        assert.equal(task4_test3(), 1);
        }
    })
})

describe('catsGroupGenerate_Young', () => {
    it('catsGroupGenerate_Young should return name of the youngest cat', () => {
        
        function catsGroupGenerate_Young(list, maxCount) {
            let listOfCats = [];
            let youngCat = obj.age.length;
        
            for (let i = 0; i < list.length; i++) {
                if ((list[i].gender === 'Female') && (list[i].age < youngCat)) {
                    youngCat = list[i].age;
                }
            }
        
            for (let i = 0; i < list.length; i++) {
                if ((list[i].gender === 'Female') && (list[i].age === youngCat)) {
                    listOfCats.push(list[i]);
                    if (listOfCats.length >= maxCount) {
                        break;
                    }
                }
            }
        
            return listOfCats;
        }

        function task4_test4() {
            return catsGroupGenerate_Young(test_list, 3).length
        }

        assert.equal(task4_test4(), 2);
    })
})

describe('nameStat', () => {
    let cats =[{name: 'name_1'}, {name: 'name_1'}, {name: 'name_1'}] 
    it('nameStat should return names count', () => {
        function task5_test() {
            return Object.values(nameStat(cats))
        }
        
        assert.equal(task5_test(cats), 3);
    })
})

describe('catFactory_2', () => {
    const catFac = catFactory(test_db)

    it('catFactory_2 should return something', () => {
        assert.equal(task2_test(test_db.name, catFac.name), true);
        assert.equal(task2_test(test_db.name, catFac.age), true);
        assert.equal(task2_test(test_db.name, catFac.gender), true);
        assert.equal(task2_test(test_db.name, catFac.legsCount), true);
        assert.equal(task2_test(test_db.name, catFac.tailLength), true);
    })
})
