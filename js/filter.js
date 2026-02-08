let arr= [10,55,66,85,90,50]

let arr1= []

let arr2= arr.filter((val) => {
    return val >50;                       // value greater than 50
})

console.log(arr2)



let names= ["pankaj", "Aher", "vijay", "sagar", "Aditya"]

let startWithA= names.filter((val) => {
    return val.startsWith("A");                // name start with A 
})

console.log(startWithA)


let Even= arr.filter((val) => {
    return val%2==0;                          // value is even 
})

console.log(Even)

let greterThan4= names.filter((val) => {
    return val.length>4;                            // name higher than lenth 4
})

console.log(greterThan4)



let divisibleBy3= arr.filter((val) => {
    return val%3==0;
})

console.log(divisibleBy3)



let lessThan30 =arr.filter((val) => {
    return val < 30;
})

console.log(lessThan30)


let includeA = names.filter((val)=> {
    return val.includes("a");                        // name include a or A
})

console.log(includeA)
    

let endsWithj = names.filter((val) => {
    return val.endsWith("j");                        // name ends with j or J
})
console.log(endsWithj)