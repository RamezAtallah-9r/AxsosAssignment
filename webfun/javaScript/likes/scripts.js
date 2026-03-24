function addLikes(button){
    var count = parseInt(button.parentElement.querySelector(".likesCount").innerHTML);
    button.parentElement.querySelector(".likesCount").innerHTML = count + 1 + " like(s)";
}

