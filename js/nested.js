function outer() {
    console.log("inner function");

    function inner() {
        console.log("it's inner function");
    }
    inner()
}

outer()


let x= ()=>{
    console.log("inner function");

    let y= () => {
        console.log("it's inner function");
    }
    y()
}

x()