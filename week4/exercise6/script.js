function onHeaderClick() {
	var head = document.getElementById('heading');
	head.firstChild.nodeValue = "New Heading";
}
function onParaClick() {
	var para = document.getElementById('para');
	para.firstChild.nodeValue = "This is an updated paragraph with javascript";
}
function onMouseEnterToMove(){
	var moveElement = document.getElementById('move');
	moveElement.firstChild.nodeValue = "Now the pointer is on top of the text";
}
function onMouseLeaveMove(){
	var moveElement = document.getElementById('move');
	moveElement.firstChild.nodeValue = "Move the mouse pointer here";
}
function initialize() {
	var headerElement = document.getElementById('heading');
	var paraElement = document.getElementById('para');
	var moveElement = document.getElementById('move');
	headerElement.addEventListener('click', onHeaderClick)
	paraElement.addEventListener('click',onParaClick)
	moveElement.addEventListener('mouseenter', onMouseEnterToMove);
	moveElement.addEventListener('mouseleave', onMouseLeaveMove);
}
document.addEventListener('click', initialize)
