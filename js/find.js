let arr= [-11, -41,25,86,56,102]

let findMethod= arr.find((val)=> {
    return val>40;
})

console.log(findMethod)






let nameFirst= ["aher", "raj", "sagar", "pankaj"]

let findFirst= nameFirst.find((val) => {
    return val.length>5
})

console.log(findFirst)





let returnEven= arr.find((val) => {
    return val%2==0;
})

console.log(returnEven)




let findFirststr= nameFirst.find((val) => {
    return val.startsWith("s")
})

console.log(findFirststr)






let returnDivisibleBy7= arr.find((val) => {
    return val%7==0;
})

console.log(returnDivisibleBy7)






let returnFirstPos= arr.find((val) => {
    return val>0;
})

console.log(returnFirstPos)













let findFirstlen= nameFirst.find((val) => {
    return val.length=8
})

console.log(findFirstlen)














let findMethod2= arr.find((val)=> {
    return val>=100;
})

console.log(findMethod2)
















let findEndsstr= nameFirst.find((val) => {
    return val.endsWith("j")
})

console.log(findEndsstr)





let returnodd= arr.find((val) => {
    return val%2==1 && val>10;
})

console.log(returnodd)