const pick = require('./js/task1')
const catFactory = require('./js/task2')
const catsGroupGenerate = require('./js/task3')
const nameStat = require('./js/task5')
const task4 = require('./js/task4')
const catFactory_2 = require('./js/task6')
const loudness = require('./loudness.js')
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



describe('pick', () => {
    it('pick возвращает рандомный элемент из тестового массива', () => {
        assert.equal(test_db.name.indexOf(pick(test_db.name)) !== -1, true, 'error');
    })
})

describe('catFactory', () => {
    const catFac = catFactory(test_db)

    it('catFactory возвращает объект с кошачьими свойствами', () => {
        assert.equal(test_db.name.indexOf(catFac.name) !== -1, true), 'error name';
        assert.equal(test_db.age.indexOf(catFac.age) !== -1, true, 'error age');
        assert.equal(test_db.gender.indexOf(catFac.gender) !== -1, true, 'error gender');
        assert.equal(test_db.legsCount.indexOf(catFac.legsCount) !== -1, true, 'error legs');
        assert.equal(test_db.tailLength.indexOf(catFac.tailLength) !== -1, true, 'error tail');
    })
})

describe('catsGroupGenerate', () => {
    it('catsGroupGenerate возвращает массивный кошатник', () => {
   
        assert.equal(catsGroupGenerate(999).length === 999, true);

    })
})

describe('catsGroupGenerate_Gender', () => {
    it('catsGroupGenerate_gender возвращает однополых кошаков', () => {
        assert.equal(task4.catsGroupGenerate_Gender(test_list).length, 3);
    })
})

describe('catsGroupGenerate_Name', () => {
    it('catsGroupGenerate_Name возвращает список имен', () => {

        assert.equal(task4.catsGroupGenerate_Name(test_list).length, 5);

    })
})

describe('catsGroupGenerate_Old', () => {
    it('catsGroupGenerate_Old возвращает облезлых кошаков', () => {

        assert.equal(task4.catsGroupGenerate_Old(test_list, 3).length, 1);

    })
})

describe('catsGroupGenerate_Young', () => {
    it('catsGroupGenerate_Young возвращает молодых кошаков', () => {

        assert.equal(task4.catsGroupGenerate_Young(test_list, 3).length, 2);

    })
})

describe('nameStat', () => {
    const cats =[{name: 'name_1'}, {name: 'name_1'}, {name: 'name_1'}];
    it('nameStat возвращает список по кол-ву имен', () => {
        
        assert.equal(Object.values(nameStat(cats)), 3);

    })
})

describe('catFactory_2', () => {
    const defaults = {gender: 'Male'}

    it('catFactory-M тож самое что и catFactory только с ключом ', () => {
        assert.equal(catFactory_2(test_db, defaults).gender === defaults.gender, true), 'error gender';
        assert.equal(catFactory_2(test_db, defaults).gender === defaults.gender, true), 'error gender';
        assert.equal(catFactory_2(test_db, defaults).gender === defaults.gender, true), 'error gender';
    })

})
