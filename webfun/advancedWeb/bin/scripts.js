const draggables = document.querySelectorAll(".item");
const bin = document.querySelector(".bin");

draggables.forEach(item => {
    item.addEventListener("dragstart", dragStart);
    console.log(item);
    item.addEventListener("dragend", dragEnd);
});
function dragStart(){
    console.log("drag start");
    this.classList.add("dragging");
}
function dragEnd(){
    console.log("drag end");
    this.classList.remove("dragging");
}
bin.addEventListener("dragover", deleteItem);
function deleteItem(e){
    e.preventDefault();
    this.classList.add("hover");
}
bin.addEventListener("dragleave", deleteItem);
function deleteItem(e){
    e.preventDefault();
    document.querySelector(".dragging").remove();
}