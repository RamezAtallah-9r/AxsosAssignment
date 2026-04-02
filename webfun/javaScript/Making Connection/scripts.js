console.log("page loaded...");
function deleteUser(el){
    var parent = el.parentNode;
    var grand = parent.parentNode;
    grand.remove();
    var count = document.querySelector(".badge");
    count.innerHTML = parseInt(count.innerHTML) - 1;
}

function changeName(el){
    var name = document.getElementById("profileName");
    name.innerText="Ramez Atallah";
}

function accept(el){
    var parent = el.parentNode;
    var sibling = parent.previousElementSibling;
    var img = sibling.querySelector("img");
    var name= sibling.innerText;
    newAdd(name, img);
    deleteUser(el);
}
function newAdd(name, img){
    var cardList = document.getElementById("cardList");
    console.log(cardList);
    var newli=document.createElement("li");
    newli.classList.add("card-list-item");
    newli.classList.add("start");
    newli.appendChild(img);
    newli.appendChild(document.createTextNode(name));
    console.log(img);
    cardList.appendChild(newli);                
}
