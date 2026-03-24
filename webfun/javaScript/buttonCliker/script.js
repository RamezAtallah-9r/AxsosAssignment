var login = document.getElementById("Login");
login.addEventListener("click", function () {
    if(login.innerHTML === "Login"){
            login.innerHTML = "Logout";
    }
    else{
        login.innerHTML = "Login";
    }

})

var add = document.getElementById("add");
add.addEventListener("click", function () {
    add.style.display = "none";
})

var btn= document.getElementById("btn");
btn.addEventListener("click", function () {
    alert("Ninja was liked");
})