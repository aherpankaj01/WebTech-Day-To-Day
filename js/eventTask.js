let btn = document.getElementById("btn");

let usernameInput = document.getElementById("username");
let passInput = document.getElementById("pass");

let message = document.getElementById("message");
let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");

btn.addEventListener("click", () => {

    let username = usernameInput.value;
    let pass = passInput.value;

    // Clear old messages
    message.innerHTML = "";
    message1.innerHTML = "";
    message2.innerHTML = "";

    // Reset borders
    usernameInput.style.borderColor = "";
    passInput.style.borderColor = "";

    if (username == "" && pass == "") {
        message.innerText = "Please enter the username & password";
        message.style.color = "red";

        usernameInput.style.borderColor = "red";
        passInput.style.borderColor = "red";

    } else if (username != "" && pass == "") {

        message2.innerText = "Please enter the password";
        message2.style.color = "red";

        passInput.style.borderColor = "red";

    } else if (username == "" && pass != "") {

        message1.innerText = "Please enter the username";
        message1.style.color = "red";

        usernameInput.style.borderColor = "red";

    } else {

        message.innerText = "Welcome";
        message.style.color = "purple";
    }
});