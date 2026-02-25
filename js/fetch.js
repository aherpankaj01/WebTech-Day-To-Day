let users= fetch("https://dummyjson.com/users")
console.log(users)
users.then((res) => {
   console.log(res)
   return res.json()
}).then((res)=> {
  console.log(res.users)
}).catch((res) => {
    console.log(res)
}).finally((res) => {
    console.log("complete")
})