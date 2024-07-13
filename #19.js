let num = [1,2,3,4,5,6]

// num.forEach((element) =>{
//     console.log(element*element)
// })


num.forEach((element) =>{
    console.log(element + element)
})

for (let i in num)
{
    console.log("values of array at position " + i + " is " + num[i])
}