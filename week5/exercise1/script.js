
function onClickCircle(){
    var button = document.getElementById("circle");
    
    button.style.opacity = 1;
}
function onLoadFunction(){
    var button = document.getElementById("circle");
    button.style.opacity = 0.5;
    button.addEventListener('click', onClickCircle)
}
document.addEventListener('DOMContentLoaded', onLoadFunction);