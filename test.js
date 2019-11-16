const obj = require('./js/database')
const pick = require('./js/task1.js');
const catFactory = require('./js/task2.js');
const catsGroupGenerate = require('./js/task3.js');
//const pick2 = require('./js/task4.js');
const nameStat = require('./js/task5.js');
const catFactory2 = require('./js/task6.js');
var assert = require('assert');
require('babel-register');

const test_db = {
    name: ['name_1', 'name_2', 'name_3', 'name_4', 'name_5'],
    age: [1, 2, 3, 4, 5],
    gender: ['Male', 'Female'],
    legsCount: [1, 2, 3, 4, 5],
    tailLength: [1, 2, 3, 4, 5]
};

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
/*
describe('catsGroupGenerate_Gender', () => {
    it('carsGroupGenerate_gender should return arr of cat', () => {
        let test = catsGroupGenerate_Gender([test_obj]);
        assert.equal(test.name, test_obj.name);
        assert.equal(test.age, test_obj.age);
        assert.equal(test.gender, test_obj.gender);
        assert.equal(test.legsCount, test_obj.legsCount);
        assert.equal(test.tailLength, test_obj.tailLength);
    })
})

describe('catsGroupGenerate_Name', () => {
    it('catsGroupGenerate_Name should return arr of cat"s name', () => {
        let test = catsGroupGenerate_Name([test_obj]);
        assert.equal(test, test_obj.name);
    })
})

describe('catsGroupGenerate_Old', () => {
    it('catsGroupGenerate_Old should return arr of the eldest cat', () => {
        let test = catsGroupGenerate_OldMan([test_obj], 1);
        assert.equal(test.name, test_obj.name);
        assert.equal(test.age, test_obj.age);
        assert.equal(test.gender, test_obj.gender);
        assert.equal(test.legsCount, test_obj.legsCount);
        assert.equal(test.tailLength, test_obj.tailLength);
    })
})

describe('catsGroupGenerate_Young', () => {
    it('catsGroupGenerate_Young should return name of the youngest cat', () => {
        let obj = {
            name: 'Nast\'a',
            age: 21,
            gender: 'Male',
            legsCount: 21,
            tailLength: 21
        };
        let test = catsGroupGenerate_YoungGirlName([obj], 1);
        assert.equal(test.name, obj.name);
        assert.equal(test.age, obj.age);
        assert.equal(test.gender, obj.gender);
        assert.equal(test.legsCount, obj.legsCount);
        assert.equal(test.tailLength, obj.tailLength);
    })
})
*/
describe('nameStat', () => {
    let cats =[{name: 'name_1'}, {name: 'name_1'}] 
    it('nameStat should return names count', () => {
        let test = nameStat(cats);
        assert.equal(cats, 1);
    })
})
