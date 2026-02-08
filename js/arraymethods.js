let arr= [10,20,30,15,10,89,99,40,50,60,70,80,90,100]
console.log(arr);

let arr1 = arr.slice(0,4)

console.log(arr1)

console.log(arr.indexOf(30))


let city= ["pune", "mumbai", "delhi", "Goa", "jaipur"]

let sortCity= city.sort()              // use to sort alphabatically
console.log(sortCity);                // highest priority given to uppercase




let numSort= arr.sort((a,b) => {
    return a-b
})

console.log(numSort)   






let x= arr.every((ele)=> {
    return ele >50;
})

console.log(x)




let s= arr.some((ele)=> {
    return ele >50;
})

console.log(s)



let str= "hello"

let reveseStr= []

for (let index = str.length-1; index >=0 ; index--) {
    reveseStr += str[index]
    
}
console.log(reveseStr)






let revesecity= city.reverse()
console.log(revesecity)







let str1= "mumbai"
let splitarr= str1.split("")
console.log(splitarr)
let spliarrR= splitarr.reverse();
console.log(spliarrR);
let spliarrRTosTR= spliarrR.join("")
console.log(spliarrRTosTR)


console.log(str1.split("").reverse().join(""))