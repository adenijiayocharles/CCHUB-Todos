document.getElementById("submit").addEventListener("click", function(){
	var text = document.getElementById("list").value;
	var listNode = document.createElement("li");
	var textNode = document.createTextNode(text);
	listNode.appendChild(textNode);

	var ulTextNode = document.getElementById("todo");
	ulTextNode.appendChild(listNode);
});