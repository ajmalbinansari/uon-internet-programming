
function reduceOpacity(){
    var button = document.getElementById("circle");
    var circleOpacity = parseFloat(button.style.opacity);
    button.style.opacity = circleOpacity - 0.1;
}
function onClickCircle(){
    
    setInterval(reduceOpacity, 1000)
}
function onLoadFunction(){
    var button = document.getElementById("circle");
    button.style.opacity = 1;
    button.addEventListener('click', onClickCircle)
}
document.addEventListener('DOMContentLoaded', onLoadFunction);