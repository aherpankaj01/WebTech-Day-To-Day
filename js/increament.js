import {outer_function} from "./scope.js"


let x= 0
let count= document.getElementById("count")


let increment= () => {
    x++
    count.innerHTML=x;
}

let decrement= () => {
    x--
    count.innerHTML=x;
}

let reset= () => {
    x=0
    count.innerHTML=x;
}


outer_function()