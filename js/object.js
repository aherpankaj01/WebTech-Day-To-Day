let mobile = {
    brand: "apple",
    model: "iphone 15 ",
    price: 99999,
    color: "red",

    store:{
        city:"pune",
        area:"deccan"
    },

    models:["phone15", "iphone16", "iphone17","iphone18"]

}

let foreacha= mobile.models.forEach((val) => {
    console.log(val)
})
console.log(foreacha)
console.log(mobile)
console.log(mobile.brand)
console.log(mobile.store.city)






mobile.ram= "8 gb"
console.log(mobile)


mobile.brand="oppo"

console.log(mobile)

delete mobile.color;

console.log(mobile)






let student = {
    name: "pankaj",
    age: 25,
    mono: 9175872906
}



console.log(student)

mobile.gender= "male";
mobile.qualification= "b.tech"

console.log(student);

delete student.mono;

console.log(student)







let car = {
    brand: "mahindra",
    product: "Thar",
    yearLaunch: 2025,
    color: ["red","black", "white"],
    engine: undefined,
    airBags: null,
    lauchPlace: {
        maharashtra: "pune",
        karnataka : "udapi",
        goa : "panaji"
    }
}



let intter=car.color.forEach((val)=> {
    console.log(val)
})

console.log(intter)

let employee= {
    name:"pankaj",
    age:23,
    sirName: "aher",
    hiredate: "19/05/2003", 
    salary: 150,
    desigantion: "traniee",
    skills:["sql","dbms","java","cn"],
    active: true

}

if (employee.active==true) {
    console.log("is active")
} else {
    console.log("no active")
}



localStorage.setItem("carname","bmw")
localStorage.setItem("color","red")


let x= localStorage.getItem("color")
console.log(x)

localStorage.removeItem("cARNAme")

let xx= localStorage.getItem("cARNAme")
console.log(xx)


localStorage.clear()