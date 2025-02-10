const triggerElements = document.querySelectorAll('.plus')
const hiddenElements= document.querySelectorAll(".plus-li");
triggerElements.forEach((triggerElement, index)=>{
    const hiddenElement = hiddenElements[index];
    const lastText = hiddenElement.querySelector('h3').innerText;
    hiddenElement.querySelector('h3').innerText = index+1 + '.' + lastText;
    triggerElement.addEventListener("mouseover", () => { 
        hiddenElement.style.display = "initial"; 
    }); 
    triggerElement.addEventListener("mouseleave", () => { 
        hiddenElement.style.display = "none"; 
    });
})
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const list = document.getElementById('interesing-places');
function moveLastToFirst() {
    const firstItem = list.firstElementChild;
    list.appendChild(firstItem);
}

function moveFirstToLast() {
    const lastItem = list.lastElementChild;
    list.prepend(lastItem)
}

leftArrow.addEventListener('click', moveLastToFirst);
rightArrow.addEventListener('click', moveFirstToLast);
