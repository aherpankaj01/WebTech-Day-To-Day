let arr= ['pankaj', 'raj', 'ajay','vijay','soham']

let x= arr.map((val)=> {
    return val.substring(0,2);        // first two letter of the string
})

console.log(x)


let arr1= [1,5,50,26,54,56,87]
let x2= arr1.map((val) =>{
    return val>25;        // check if the value is greater than 25
})
console.log(x2);


let fileraddEven= arr1.filter((val) => {
    return val>20 && val%2==0;        // check if the value is greater than 20 and even
})

console.log(fileraddEven);

let fileraddEven1= arr1.find((val) => {
    return val>20 && val%2==0;        // check if the value is greater than 20 and even
})

console.log(fileraddEven1);


let ar= [10,20,30,40,50];

let ret= ar.map((val)=> {
    return val*2;        // multiply the value by 2
})

console.log(ret);

let ret1= arr.map((val) => {
    return val.toUpperCase()        // convert the value to uppercase
})

console.log(ret1);

let ret2= arr.map((val) => {
    return val.length        // get the length of the value
})

console.log(ret2);


let ret3= ar.map((val) => {
    return val+5;        // add 5 to the value
})

console.log(ret3);


let gst= ar.map((val) => {
    return val + val *(18/100);        // add gst to the value (18% of the value)   
})

console.log(gst);


let grades= [80,95,75,60,53,0];

let arrConvert= grades.map((val)=> {
    if (val>=90) {
        return "A";
    } else if (val>=80) {                     // if the value is greater than or equal to 80, return B
        return "B";
    } else if (val>=70) {                     // if the value is greater than or equal to 70, return C
        return "C";
    } else if (val>=60) {                     // if the value is greater than or equal to 60, return D
        return "D";
    } else {
        return "F";
    }
})

let evenOdd= grades.map((val) => {
    if (val%2==0) {
        return "Even";       // if the value is even, return Even
    } else {
        return "Odd";        // if the value is odd, return Odd
    }
})

console.log(evenOdd);


let last3Letter= arr.map((val) => {
    return val.slice(-3)         // last 3 letetrr
})

console.log(last3Letter)