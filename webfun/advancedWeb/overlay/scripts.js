var on = document.querySelector(".modal");
function modalDisplay() {
  on.style.display = "flex";
  on.style.zIndex = "1";
}
function modalClose() {
  on.style.display = "none";
  on.style.zIndex = "-1";
}