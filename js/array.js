let arr=[5,8,12,4,25,85,788,896]

let findNum= arr.find((val)=> {
    return val>10;
})

console.log(findNum*2)


let a= arr.sort((a,b)=> {
    return b-a
})

console.log(a[0])













let tax= [400,600,900,1200]

let gstPlusTax= tax.map((val) => {
    return val+(val*0.1)
})


console.log(gstPlusTax)


let greaterThan500 = gstPlusTax.find((val) => {
    return 500< val
})


console.log(greaterThan500)












let names= ["Mumbai", "delhi" , "Madurai"]

let startWithM= names.filter((val) => {
    return val.toUpperCase().startsWith("M")
})


console.log(startWithM)

let length2= startWithM.map((val) => {
    return val.slice(0,2)
})

console.log(length2)















let num= [2,10,15,8]

let add5= num.filter((val)=> {
    return val+5
})

console.log(add5)


let firstGreaterThan10= add5.find((val)=> {
    return val>10
})

console.log(firstGreaterThan10)















let fruits= ["banana", "papaya", "mango"]

let last3= fruits.map((val) =>{
    return val.slice(-3)
})

console.log(last3)


let endsWithana= last3.map((val) => {
    return val.endsWith("ana")
})

console.log(endsWithana)
















let sorting= [7,15,20,3,12]

let sorti= sorting.sort((a,b) => {
    return a-b
})

console.log(sorti)


let firstDivisibleBy5= sorti.find((val)=> {
    return val%5==0
})

console.log(firstDivisibleBy5)
















let score= [80,65,90]

let sortScore= score.sort((a,b)=> {
    return b-a
})

console.log(sortScore)


let convertToA= sortScore.map((val) => {
    if (val>75) {
        return 'A'
    }
    else{
        return 'B'
    }
})


console.log(convertToA)



let gradeA= sortScore.filter((val)=> {
    return val>75
})

console.log(gradeA)

















let any= ["sun", "moon" , "star"]

let uppering= any.map((val) => {
    return val.toUpperCase();
})

console.log(uppering)


let starsWithS = uppering.filter((val)=> {
    return val.startsWith("S")
})

console.log(starsWithS)


let findFirstLength4 = starsWithS.filter((val) => {
    return val.length>=4
})

console.log(findFirstLength4)
