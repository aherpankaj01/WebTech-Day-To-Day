let otp;


let otpClick= ()=> {
    let mobileno= document.getElementById("entNum").value

    console.log(mobileno)
    if (mobileno) {
        otp= Math.trunc(Math.random()* 10000)
        let otpRec= document.getElementById("otpinput")
        alert(`otp receive ${otp}`)
        otpinput.value = otp;
        setTimeout(()=> {
            homepage()
        }, 1000)
    }
     else {
        alert("plase enter your mo. no.")
    }


}

let homepage= ()=> {
    if (!otp) {
       alert("plase enter your otp ")
    } 
    else if (otp ==`${otp}`) {
         window.location.href="home1.html"
    }
    else {
        alert("enetr your otp correctly")
    }
}
