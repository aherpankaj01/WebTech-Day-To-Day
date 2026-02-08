let store = () => {
    let usename = document.getElementById("usename").value;
    let pass = document.getElementById("pass").value;
  
    localStorage.setItem("username", usename);
    localStorage.setItem("pass", pass);
  
    alert("Registered successfully!");
  };
  
  let login = () => {
    let username1 = document.getElementById("username1").value;
    let password = document.getElementById("pass1").value;
  
    if (
      localStorage.getItem("username") === username1 &&
      localStorage.getItem("pass") === password
    ) {
      window.location.href = "home.html";
    } else {
      alert("Please enter correct username or password");
    }
  };
  