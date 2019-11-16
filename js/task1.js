function pick(list) {
    return list[Math.floor(Math.random() * list.length)]
}
module.exports = pick

//console.log(pick(require('./database').name))
