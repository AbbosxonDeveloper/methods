// FIRST #1 every
let arr = [
    1, 2, 3
]

Array.prototype.MyEvery = function(callback) {
    for (let i = 0; i < this.length; i++)
        return Boolean(this[i])

}
console.log(arr.MyEvery((el) => el > 0));


// #2 find

// let arr2 = ['john', 'dail', 'toms', 'nodir']

// Array.prototype.myfInd = function(callback) {
//     let store = []
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) store.push(this[i])
//     }
//     return store
// }

// let DoFind = arr2.myfInd(name => name === 'dail')

// console.log(DoFind);

// #3 findindex

// let numArr = [1, 2, 5, 0, 3]

// Array.prototype.newFindIndex = function(callback) {
//     let store = []
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i])) store.push(i)
//     }
//     return store[0]

// }

// let DoFindIndex = numArr.newFindIndex(idx => idx > 2)
// console.log(DoFindIndex);

// #4 foreach

// let numArr2 = [1, 2, 3, 4, 5]

// Array.prototype.myForeach = function(callback) {
//     let store = []
//     for (let i = 0; i < this.length; i++)
//         if (callback(this[i])) store.push(this[i])
//     return store

// }

// numArr2.myForeach((el) => console.log(el += el % 3))

// #5 reduce

let noArr = []
let reduceNum = [1, -1, 6, 3]
Array.prototype.myReduce = function(callback, intValue) {
    let acc = intValue
    let i = intValue ? 0 : 1
    if (!this.length && !intValue) return this

    if (!intValue) acc = this[0]
    for (i; i < this.length; i++) acc = callback(acc, this[i], i, this)
    return acc
}

let DoReduce = reduceNum.myReduce((acc, value) => acc += value)
console.log(DoReduce)

'9R@8rbMn9PgUCR3'