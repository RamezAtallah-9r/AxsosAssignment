function showParent(){
    const parent = document.querySelector('.items').parentElement;
    parent.classList.toggle("active");
    document.querySelector('.explain').innerText = `The parent of B is ${parent}.`;
}

function showChildren(){
    const parent = document.querySelector('.div-group');
    const children = parent.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.toggle("active");
    }
    document.querySelector('.explain').innerText = `The children of the container are ${Array.from(children).map(child => child.innerText).join(', ')}.`;
}
function showSiblings(){
    const siblings = document.querySelectorAll('.items:not(:nth-child(2))');
    for (let i = 0; i < siblings.length; i++) {
        siblings[i].classList.toggle("active");
    }
    document.querySelector('.explain').innerText = `The siblings of B are ${Array.from(siblings).map(sibling => sibling.innerText).join(', ')}.`;
}