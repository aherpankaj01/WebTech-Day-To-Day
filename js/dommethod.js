// // let arr=[]

// let box= document.getElementById("box")

// // let h1= document.createElement("h1")
// // let h2= document.createElement("h2")
// // let h3= document.createElement("h3")
// // let h4= arr.push(h1.innerText= "pankaj")
// // let h5= arr.push(h2.innerText= "nammah shivay") 
// // let h6= arr.push(h3.innerText= "mahakal") 


// // ele.append(h4,h5,h6)
// // document.writeln(arr)
// // console.log(arr)

// let arr= ["pankaj", "nammah", "aher"]

// arr.forEach((ele) => {
//     let li= document.createElement("li")
//     li.innerText=ele
//     console.log(ele)
//     box.append(li)
    
// })

// let btn= document.getElementById("sub")

// btn.addEventListener("click",()=> {
//     console.log("button is clicked")
// })

// box.addEventListener("click", ()=> {
//     console.log("div is clicked.............................................................................................................")
// })
let user= document.getElementById("user")
user.addEventListener("keydown", (e)=> {
    console.log(e.target.value)
})