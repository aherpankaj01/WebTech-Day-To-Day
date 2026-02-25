let getuser =(id,cb)=> {
     let user= { id : "id", name: "on"}
     cb(user)
}


let getorder= (id,cb)=> {

    let orders=['mobile', 'laptop']
    cb(orders)
}


let getOrderDetail= (product,cb)=> {
  cb(product)
}


getuser('#1', (user)=> {

    getorder(user.id ,(orders) => {

        getOrderDetail(orders[0], (product) => {
            console.log(product)
        })
        
    })
})