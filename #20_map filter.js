// arr=[1,2,3,4,5]

// let a = arr.map((value, index, array) => {
//     console.log(value, index, array)
//     return value * 2 * (index)
// })
    
// console.log(a)

let arr = [ 1, 2, 3, 4]
// let a = arr.filter((a)=>
// {
//     return a > 3
// })
// console.log(a)

const num = (h1 ,h2) => {
    return h1 + h2;
}
let a = arr.reduce(num)

console.log(a)