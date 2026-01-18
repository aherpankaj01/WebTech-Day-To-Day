let let_user_login= ()=> {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    console.log(username)
    console.log(password)

    if (username==="PANKAJ" && password==="12345") {
        window.location.href="home.html"
    }
   
   else {
    alert('plase enter username and password');
   }
}