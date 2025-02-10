const triggerElements = document.querySelectorAll('.plus')
const hiddenElements= document.querySelectorAll(".plus-li");
debugger;
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
