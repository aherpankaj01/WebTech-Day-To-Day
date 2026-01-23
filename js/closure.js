let outerFunction= ()=> {
    let a =20;
    let innerFunction= ()=> {
        a++;
        console.log(a);
    }
    return innerFunction
}
let y= outerFunction()

y();
y();
y();
y();
y();
y();
y();
y();
y();
y();

