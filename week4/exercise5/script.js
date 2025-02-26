function initialize() {
	var head = document.getElementById('heading');
	head.firstChild.nodeValue = "New Heading";
	var para = document.getElementById('para');
	para.firstChild.nodeValue = "This is an updated paragraph with javascript";
}
document.addEventListener('click', initialize)
