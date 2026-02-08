let square_no=() =>{
    let x=parseInt(prompt("enter a number"))
    return x*x

}

let z=square_no()
console.log(z);


let higher_order= (a,b,cd)=> {
    console.log(a);
    console.log(b);
    cd()

}

higher_order(10,'pankaj', ()=> {
    console.log("call back function")
})


let higher_order2=(p,q,rd)=> {
    console.log(p,q);
    rd(500,800)
}

higher_order2(20,50,(x,y)=> {
    console.log(x+y)
})


let para_first= (zs,xd) => {
    console.log("para")
    xd()
}

para_first(50,(xd)=> {
    console.log("pankaj")
})