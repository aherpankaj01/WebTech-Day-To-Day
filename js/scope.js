let a= 15;
const b= 25;
var c= 56;

let global_scope =()=> {
    console.log(a)
    console.log(b)
    console.log(c)
}

global_scope()

// function scope

let function_scope =()=> {
    let x= 35;
    const y= 55;
    var z= 86;
    console.log(x)
    console.log(y)
    console.log(z)
}

function_scope()

// console.log(x)  //scope.js:26 Uncaught ReferenceError: x is not defined
// console.log(y)  //scope.js:26 Uncaught ReferenceError: x is not defined
// console.log(z)  //scope.js:26 Uncaught ReferenceError: x is not defined


{
  let p =555; 
  var q= 556  
}
// console.log(p)    scope.js:34 Uncaught ReferenceError: p is not defined

console.log(q)  // var can be acees outside of block


export let outer_function= ()=> {
    let ab= 45;
    console.log(ab)
    let inner_function =() => {
        let cd= 54;
        console.log(ab,cd)
    }
    inner_function()
}

outer_function()


// overshadow
let ab= 55;
let outer2_function= ()=> {
    ab= 45;
    console.log(ab);
}

outer2_function()

console.log(ab)