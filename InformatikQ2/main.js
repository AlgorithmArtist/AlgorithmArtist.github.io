//Eventlistner wartet auf laden des Fensters
window.addEventListener("load", showDate);
//Uhr
function showDate(){
    let Zeit = new Date();
    let display = document.getElementById("clock");
    display.innerText = Zeit.toLocaleTimeString();
    setInterval(showDate, 1000)
}