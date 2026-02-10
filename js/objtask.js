let multipleuser=[]

let submit= ()=> {
    let nameInput= document.getElementById("name").value
    let ageInput= document.getElementById("age").value

    let student= {
        name:nameInput,
        age:ageInput



    }



    multipleuser.push(student)
    console.log(multipleuser)


}
