
function onClickCircle(){
    var button = document.getElementById("circle");
    button.style.opacity = 0.5;
    button.style.opacity = 0.5;
}
function onLoadFunction(){
    var button = document.getElementById("circle");
    button.addEventListener('click', onClickCircle)
}
document.addEventListener('DOMContentLoaded', onLoadFunction);