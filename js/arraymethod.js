let arr= ["watch", "shirt","pants", "ac","mobile"]

console.log(arr.includes("ac"))


let searchProduct= () => {
    let productName= document.getElementById("productName").value;

    let dataDiv =document.getElementById("targetDiv")
    let modifyProduct = arr.map((ele)=> {
        return ele.toLowerCase()
    })

    // console.log(modifyProduct)

    // console.log(modifyProduct.includes(productName.toLowerCase()));


    // let dataDiv= document.getElementById("targetDiv").value
   

    if (modifyProduct.includes(productName.toLowerCase()))
         {
    let productName= document.getElementById("productName").value;
       dataDiv.innerHTML= productName.toLowerCase();

    } else {
        dataDiv.innerHTML= "data not found"
    }
}