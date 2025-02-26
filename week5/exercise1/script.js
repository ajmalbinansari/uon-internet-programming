
function onClickCircle(){
    var button = document.getElementById("circle");
    var circleOpacity = parseFloat(button.style.opacity);
    button.style.opacity = circleOpacity + 0.1;
}
function onLoadFunction(){
    var button = document.getElementById("circle");
    button.style.opacity = 0.5;
    button.addEventListener('click', onClickCircle)
}
document.addEventListener('DOMContentLoaded', onLoadFunction);