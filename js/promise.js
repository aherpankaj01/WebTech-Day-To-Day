let promsie= new Promise((resolve,reject) => {
    let x= false

    if (x) {
        resolve("oreder deliver")
    } else {
        reject("order not deliver")
    }
}
)

console.log(promsie)

promsie.then((res) => {
    console.log(res)
})

promsie.catch((res) => {
    console.log(res)
})

promsie.finally((res) => {
    console.log("finally")
})







let display= new Promise((resolve,reject) => {
    resolve(10)
})

display.then((res) => {
    console.log(res)
    return res*20;
}).then((res) => {
    console.log(res)
    return res*20
}).then((res) => {
    console.log(res)
    return res*20
   
}).then((res) => {
    console.log(res)
    return res*20
}).then((res) => {
    console.log(res)
    return res*20
    
})

