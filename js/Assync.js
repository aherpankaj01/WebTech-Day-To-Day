// // let async= ()=> {
// //     console.log("fethcing .............")

// //     let user= fetch("https://dummyjson.com/users")
// //     console.log(user);
// //     user.then((res) => {
// //         console.log(res)

// //         return res.json()
// //     }).then((res) => {
// //         console.log(res)
// //     })

// //     console.log("fetching is completed")
// // }

// // async()




// // let asyncAwait= async()=> {
// //     console.log("fethcing .............")

// //    try {
// //     let user= await fetch("https://dummyjson.com/users12")
// //     console.log(user);
// //     let data= await user.json()
// //     console.log(data)
   
// //     console.log("fetching is completed")
    
// //    }
// //    catch {
// //     console.log("errrrr")
// //    }
// // }
                               
// // asyncAwait()



// // let anotherTry= async() => {
// //     console.log("fetching................")

// //     let product= await fetch("https://dummyjson.com/products")

// //     console.log(product)

// //     let data= await product.json()
// //     console.log(data)

// //     console.log("fetching is completd")
// // }

// // anotherTry()




// // let allProduct=[]


// // let displayProduct= (product)=> {
// //     console.log(product)
// //     product.forEach(element => {
// //         console.log(element.title)
// //     });
// // }

// // let displayParticular = async() => {
// //    try {
// //     let product= await fetch("https://dummyjson.com/products")

// //     let data= await product.json()

// //    allProduct= data.products

// //    displayProduct(allProduct)

// //    }
// // catch {
// //     console.log("errrrr")
// // }
// // }

// // displayParticular()





// let allProduct=[]


// let displayProduct= (product)=> {
//     console.log(product)
//     product.forEach(element => {
//         console.log(element.title)
//         console.log(Math.round(element.price *90 ))
//     });
// }



// let displayParticular = async() => {
//    try {
//     let product= await fetch("https://dummyjson.com/products")

//     let data= await product.json()

//    allProduct= data.products

//     displayProduct(allProduct)


//    }
// catch {
//     console.log("errrrr")
// }
// }

// displayParticular()



// let above = ()=> {
//     let filterproduct= allProduct.filter((ele) => {
//         return Math.round(ele.price *90)>1000
//     })
//     console.log(filterproduct)
// } 


// let below = ()=> {
//     let filterproduct= allProduct.filter((ele) => {
//         return Math.round(ele.price *90)<1000
//     })
//     console.log(filterproduct)
// } 


// // setTimeout(() => {
// //     console.log("hello")
    
// // }, 1000);


// let x=0
// let a= setInterval(() => {
//     x++;
//     console.log(x)
//    if (x== 5) {
//     clearInterval(a)
//    }
// },1000)




let demo = () => {
    console.log("hello")
}


let display =() => {
    demo()
    console.log("hiiii")
}

display()



setTimeout(() => {
    console.log("set time out 1")
}, 1000)

setTimeout(() => {
    console.log("set time out 2")
}, 3000)

setTimeout(() => {
    console.log("set time out 3")
}, 2000)

setTimeout(() => {
    console.log("set time out 4")
}, 0)





let promise = new Promise((res) => {
    res("promise");
});

promise.then((resp) => {
    console.log(resp);
});