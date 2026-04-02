function addLikes(button){
    var likes = button.parentElement.querySelector(".likesCount");
    var count = parseInt(likes.innerHTML);
    button.parentElement.querySelector(".likesCount").innerHTML = count + 1 + " like(s)";
}

function changePhoto(element){
    //1
    var photo =element.previousElementSibling;
    //2
        var photo =element.closest('.profile').querySelector('.profilePhoto')
    //1
    photo.src="github.png";
    //2
    photo.src = "github.png";
}