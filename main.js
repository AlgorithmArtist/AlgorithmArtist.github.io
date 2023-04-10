//Hero scroll down button
let button = document.getElementById("moreBtn");
button.addEventListener("click", scrollToNextSection);

function scrollToNextSection(){
    this.parentNode.nextElementSibling.scrollIntoView();
}